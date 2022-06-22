// Copyright 2017-2022 @polkadot/deno authors & contributors
// SPDX-License-Identifier: Apache-2.0

// execute with
//   deno run --allow-read --allow-run --allow-write --allow-env ci-release.ts

// regex for matching `deno.land/x/polkadot[@version]/
const reVer = /deno\.land\/x\/polkadot(@\d\d?\.\d\d?\.\d\d?-?\d?\d?)?\//g;

// execute a command
async function exec (...cmd: string[]): Promise<void> {
	const shortCmd = `'${cmd[0]} ${cmd[1]} ...'`;

	console.log(`+ ${shortCmd}`);

	const status = await Deno.run({ cmd }).status();

	if (!status.success) {
		throw new Error(`FATAL: ${shortCmd} returned ${status.code}`);
	};
}

// retrieve the current version from CHANGELOG.md
async function getVersion (): Promise<string> {
	const contents = await Deno.readTextFile('CHANGELOG.md');
	const vermatch = contents.match(/# CHANGELOG\n\n## (\d\d?.\d\d?.\d\d?-?\d?\d?) /);

	if (!vermatch || !vermatch[1]) {
		throw new Error('FATAL: Unable to extract expected version from CHANGELOG.md');
	}

	return vermatch[1];
}

// sets the version globally to all deno.land/x/polkadot imports
async function setVersion (version: string, dir: string): Promise<void> {
	for await (const entry of Deno.readDir(dir)) {
		if (entry.isDirectory) {
			await setVersion(version, `${dir}/${entry.name}`);
		} else if (entry.name.endsWith('.ts')) {
			const path = `${dir}/${entry.name}`;
			const contents = await Deno.readTextFile(path);

			if (reVer.test(contents)) {
				await Deno.writeTextFile(path, contents.replace(reVer, `deno.land/x/polkadot@${version}/`));
			}
		}
  }
}

// sets up git, username, merge & latest
async function gitSetup (): Promise<void> {
	const USER = 'github-actions[bot]';
	const MAIL = '41898282+github-actions[bot]@users.noreply.github.com';

	await exec('git', 'config', 'user.name', `"${USER}"`);
	await exec('git', 'config', 'user.email', `"${MAIL}"`);
	await exec('git', 'config', 'push.default', 'simple');
	await exec('git', 'config', 'merge.ours.driver', 'true');
	await exec('git', 'checkout', 'master');
}

// commit and push the changes to git
async function gitPush (version: string): Promise<void> {
	const gitRepo = `https://${Deno.env.get('GH_PAT')}@github.com/${Deno.env.get('GITHUB_REPOSITORY')}.git`;

	await exec('git', 'add', '--all', '.');
	await exec('git', 'commit', '--no-status', '--quiet', '-m', `"[CI Skip] publish deno.land/x/polkadot@${version}"`);
	await exec('git', 'tag', version);
	await exec('git', 'push', gitRepo, '--tags');
}

const version = await getVersion();

await gitSetup();
await setVersion(version, '.');
await gitPush(version);
