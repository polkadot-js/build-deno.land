// Copyright 2017-2022 @polkadot/deno authors & contributors
// SPDX-License-Identifier: Apache-2.0

// execute with
//   deno run --allow-read --allow-run --allow-write --allow-env ci-release.ts

import { stringCamelCase } from 'https://deno.land/x/polkadot@0.2.4/util/mod.ts';

// tighter specification for git arguments
type GitArgs =
  ['add', '--all', '.'] |
  ['checkout', 'master'] |
  ['commit', '--no-status', '--quiet', '-m', string] |
  ['config', 'merge.ours.driver' | 'push.default' | `user.${'email' | 'name'}`, string] |
  ['push', string] |
  ['push', string, '--tags'] |
  ['tag', string];

// use .. notation to import @polkadot packages
const IS_DOT_PATH = false;

// template for the deno.land/x path
const DENO_X = 'https://deno.land/x';

// flag set to tru if we are in a CI environment
const IS_CI = !!Deno.env.get('GITHUB_REPOSITORY');

// regex for matching https://deno.land/x/polkadot[@<version>]/
const RE_PKG = /https:\/\/deno\.land\/x\/polkadot(@\d*\.\d*\.\d*(-\d*)?)?\//g;

// regex for matching packageInfo (with ()'s to disallow here)
const RE_VER = /type: ('deno'), version: ('.*')/g;

// GitHub specific config, user, email & repo
const GH_USER = 'github-actions[bot]';
const GH_MAIL = '41898282+github-actions[bot]@users.noreply.github.com';
const GH_REPO = `https://${Deno.env.get('GH_PAT')}@github.com/${Deno.env.get('GITHUB_REPOSITORY')}.git`;

// execute a command
async function exec (...cmd: string[]): Promise<void> {
  const shortCmd = `'${cmd[0]} ${cmd[1]} ...'`;

  console.log(`+ ${shortCmd}`);

  const status = await Deno.run({ cmd }).status();

  if (!status.success) {
    throw new Error(`FATAL: ${shortCmd} returned ${status.code}`);
  }
}

// shortcut for exec('git', ...string[])
function git (...args: GitArgs): Promise<void> {
  return exec('git', ...args);
}

// sets up git, username, merge & latest
async function gitSetup (): Promise<void> {
  if (!IS_CI) {
    // don't clobber local setup on non-CI
    return;
  }

  await git('config', 'user.name', GH_USER);
  await git('config', 'user.email', GH_MAIL);
  await git('config', 'push.default', 'simple');
  await git('config', 'merge.ours.driver', 'true');
  await git('checkout', 'master');
}

// commit and push the changes to git
async function gitPush (version: string): Promise<void> {
  if (!IS_CI) {
    // don't push if we are not on CI
    return;
  }

  await git('add', '--all', '.');
  await git('commit', '--no-status', '--quiet', '-m', `[CI Skip] deno.land/x/polkadot@${version}`);
  await git('push', GH_REPO);
  await git('tag', version);
  await git('push', GH_REPO, '--tags');
}

// retrieve the current version from CHANGELOG.md
async function getVersion (): Promise<string> {
  const contents = await Deno.readTextFile('CHANGELOG.md');
  const vermatch = contents.match(/# CHANGELOG\n\n## (\d*.\d*.\d*(-\d*)?) /);

  if (!vermatch || !vermatch[1]) {
    throw new Error('FATAL: Unable to extract expected version from CHANGELOG.md');
  }

  return vermatch[1];
}

// sets the version globally to all deno.land/x/polkadot imports
async function setVersion (version: string, dir: string, level = 0): Promise<void> {
  const isBeta = version.includes('-');
  const topLevel = level
    ? new Array<string>(level).fill('..').join('/')
    : '.';

  for await (const entry of Deno.readDir(dir)) {
    if (!entry.name.startsWith('.')) {
      if (entry.isDirectory) {
        await setVersion(version, `${dir}/${entry.name}`, level + 1);
      } else if (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx') || entry.name.endsWith('.md')) {
        const path = `${dir}/${entry.name}`;
        const contents = await Deno.readTextFile(path);

        if (RE_PKG.test(contents) && (!isBeta || !entry.name.endsWith('.md'))) {
          await Deno.writeTextFile(
            path,
            !IS_DOT_PATH || entry.name.endsWith('.md')
              ? contents.replace(RE_PKG, `https://deno.land/x/polkadot@${version}/`)
              : contents.replace(RE_PKG, `${topLevel}/`)
          );
        } else if (RE_VER.test(contents) && entry.name.endsWith('packageInfo.ts')) {
          await Deno.writeTextFile(
            path,
            contents.replace(RE_VER, `type: 'deno', version: '${version}'`)
          );
        }
      }
    }
  }
}

// creates a new mod.ts file with all the available imports
async function createModTs (version: string): Promise<void> {
  const imports: string[] = [];

  for await (const entry of Deno.readDir('.')) {
    if (entry.isDirectory && !entry.name.startsWith('.')) {
      imports.push(`export * as ${stringCamelCase(entry.name)} from './${entry.name}/mod.ts';`);
    }
  }

  await Deno.writeTextFile('mod.ts', `// Copyright 2017-${new Date().getFullYear()} @polkadot/deno authors & contributors\n// SPDX-License-Identifier: Apache-2.0\n\n// auto-generated via ci-release.ts, do not edit\n\n${imports.sort().join('\n')}\n`);
  await Deno.writeTextFile('import_map.json', `${JSON.stringify({
    imports: {
      // we construct the urls here, we don't want to regex to catch it
      [`${DENO_X}/polkadot/`]: './',
      [`${DENO_X}/polkadot@${version}/`]: './',
      // deno tries to download types from incorrect location
      'https://esm.sh/v90/@types/bn.js@~5.2/index.d.ts': 'https://esm.sh/v90/@types/bn.js@5.1.0/index.d.ts'
    }
  }, null, 2)}\n`);
}

const version = await getVersion();

await gitSetup();
await createModTs(version);
await setVersion(version, '.');
await gitPush(version);
