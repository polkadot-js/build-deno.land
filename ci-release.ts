// Copyright 2017-2022 @polkadot/deno authors & contributors
// SPDX-License-Identifier: Apache-2.0

// execute with
//   deno run --allow-read --allow-run --allow-write --allow-env ci-release.ts

const IS_CI = !!Deno.env.get('GITHUB_REPOSITORY');

async function exec (...cmd: string[]): Promise<void> {
	const status = await Deno.run({ cmd }).status();

	if (!status.success) {
		throw new Error(`FATAL: '${cmd[0]} ${cmd[1]} ...' returned ${status.code}`);
	};
}

async function getVersion (): Promise<string> {
	const contents = await Deno.readTextFile('CHANGELOG.md');
	const vermatch = contents.match(/# CHANGELOG\n\n## (\d\d?.\d\d?.\d\d?-?\d?\d?) /);

	if (!vermatch || !vermatch[1]) {
		throw new Error('FATAL: Unable to extract expected version from CHANGELOG.md');
	}

	return vermatch[1];
}

async function setVersion (version: string, dir: string): Promise<void> {
	for await (const entry of Deno.readDir(dir)) {
		if (entry.isDirectory) {
			await setVersion(version, `${dir}/${entry.name}`);
		} else if (entry.name.endsWith('.ts') && entry.name !== 'ci-release.ts') {
			const path = `${dir}/${entry.name}`;
			const contents = await Deno.readTextFile(path);

			if (contents.includes('DENOPUBVER')) {
				await Deno.writeTextFile(path, contents.replaceAll('DENOPUBVER', version));
			}
		}
  }
}

async function gitSetup (): Promise<void> {
	const USER = 'github-actions[bot]';
	const MAIL = '41898282+github-actions[bot]@users.noreply.github.com';

	if (IS_CI) {
		await exec('git', 'config', 'user.name', `"${USER}"`);
		await exec('git', 'config', 'user.email', `"${MAIL}"`);
		await exec('git', 'config', 'push.default', 'simple');
		await exec('git', 'config', 'merge.ours.driver', 'true');
	}

  await exec('git', 'checkout', 'master');
}

async function gitPush (version: string): Promise<void> {
	if (IS_CI) {
		await exec('git', 'add', '--all', '.');
		await exec('git', 'commit', '--no-status', '--quiet', '-m', `"[CI Skip] publish deno.land/x/polkadot@${version}"`);
		await exec('git', 'tag', `v${version}`);
		await exec('git', 'push', '--tags', `https://${Deno.env.get('GH_PAT')}@github.com/${Deno.env.get('GITHUB_REPOSITORY')}.git`);
	}
}

const version = await getVersion();

await gitSetup();
await setVersion(version, '.');
await gitPush(version);
