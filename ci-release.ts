// Copyright 2017-2022 @polkadot/deno authors & contributors
// SPDX-License-Identifier: Apache-2.0

// execute with
//   deno run --allow-read --allow-run --allow-write --allow-env ci-release.ts

import { stringCamelCase } from 'https://deno.land/x/polkadot@0.0.0-9/util/mod.ts';

// tighter specification for git arguments
type GitArgs =
  ['add', '--all', '.'] |
  ['checkout', 'master'] |
  ['commit', '--no-status', '--quiet', '-m', string] |
  ['config', 'merge.ours.driver' | 'push.default' | `user.${'email' | 'name'}`, string] |
  ['push', string] |
  ['push', string, '--tags'] |
  ['tag', string];

// regex for matching `deno.land/x/polkadot[@<version>]/
const RE_PKG = /deno\.land\/x\/polkadot(@\d*\.\d*\.\d*(-\d*)?)?\//g;

// execute a command
async function exec(...cmd: string[]): Promise<void> {
  const shortCmd = `'${cmd[0]} ${cmd[1]} ...'`;

  console.log(`+ ${shortCmd}`);

  const status = await Deno.run({ cmd }).status();

  if (!status.success) {
    throw new Error(`FATAL: ${shortCmd} returned ${status.code}`);
  };
}

// shortcut for exec('git', ...string[])
function git (...args: GitArgs): Promise<void> {
  return exec('git', ...args);
}

// retrieve the current version from CHANGELOG.md
async function getVersion(): Promise<string> {
  const contents = await Deno.readTextFile('CHANGELOG.md');
  const vermatch = contents.match(/# CHANGELOG\n\n## (\d*.\d*.\d*(-\d*)?) /);

  if (!vermatch || !vermatch[1]) {
    throw new Error('FATAL: Unable to extract expected version from CHANGELOG.md');
  }

  return vermatch[1];
}

// sets the version globally to all deno.land/x/polkadot imports
async function setVersion(version: string, dir: string): Promise<void> {
  for await (const entry of Deno.readDir(dir)) {
    if (entry.isDirectory) {
      await setVersion(version, `${dir}/${entry.name}`);
    } else if (entry.name.endsWith('.ts') || entry.name.endsWith('.md')) {
      const path = `${dir}/${entry.name}`;
      const contents = await Deno.readTextFile(path);

      if (RE_PKG.test(contents)) {
        await Deno.writeTextFile(path, contents.replace(RE_PKG, `deno.land/x/polkadot@${version}/`));
      }
    }
  }
}

// sets up git, username, merge & latest
async function gitSetup(): Promise<void> {
  const USER = 'github-actions[bot]';
  const MAIL = '41898282+github-actions[bot]@users.noreply.github.com';

  await git('config', 'user.name', USER);
  await git('config', 'user.email', MAIL);
  await git('config', 'push.default', 'simple');
  await git('config', 'merge.ours.driver', 'true');
  await git('checkout', 'master');
}

// commit and push the changes to git
async function gitPush(version: string): Promise<void> {
  const REPO = `https://${Deno.env.get('GH_PAT')}@github.com/${Deno.env.get('GITHUB_REPOSITORY')}.git`;

  await git('add', '--all', '.');
  await git('commit', '--no-status', '--quiet', '-m', `[CI Skip] deno.land/x/polkadot@${version}`);
  await git('push', REPO);
  await git('tag', version);
  await git('push', REPO, '--tags');
}

// creates a new mod.ts file with all the available imports
async function createModTs (): Promise<void> {
  const imports: string[] = [];

  for await (const entry of Deno.readDir('.')) {
    if (entry.isDirectory && !entry.name.startsWith('.')) {
      imports.push(`export * as ${stringCamelCase(entry.name)} from './${entry.name}/mod.ts';`);
    }
  }

  await Deno.writeTextFile('mod.ts', `// Copyright 2017-${new Date().getFullYear()} @polkadot/deno authors & contributors\n// SPDX-License-Identifier: Apache-2.0\n\n// auto-generated via ci-release.ts, do not edit\n\n${imports.sort().join('\n')}\n`);
}

const version = await getVersion();

await gitSetup();
await createModTs();
await setVersion(version, '.');
await gitPush(version);
