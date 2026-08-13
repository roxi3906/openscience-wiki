import {readFile, readdir} from 'node:fs/promises';
import {extname, join, relative} from 'node:path';

const repositoryRoot = process.cwd();
const ignoredDirectories = new Set([
  '.docusaurus',
  '.git',
  'build',
  'node_modules',
]);
const checkedExtensions = new Set([
  '.css',
  '.js',
  '.json',
  '.md',
  '.mdx',
  '.mjs',
  '.ts',
  '.tsx',
  '.yaml',
  '.yml',
]);
const hanCharacters = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/u;
const failures = [];

async function inspectDirectory(directory) {
  const entries = await readdir(directory, {withFileTypes: true});

  for (const entry of entries) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;

    const absolutePath = join(directory, entry.name);
    if (entry.isDirectory()) {
      await inspectDirectory(absolutePath);
      continue;
    }

    if (!checkedExtensions.has(extname(entry.name))) continue;

    const lines = (await readFile(absolutePath, 'utf8')).split('\n');
    lines.forEach((line, index) => {
      if (hanCharacters.test(line)) {
        failures.push(`${relative(repositoryRoot, absolutePath)}:${index + 1}`);
      }
    });
  }
}

await inspectDirectory(repositoryRoot);

if (failures.length > 0) {
  console.error('Chinese characters remain in repository text files:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('English-only repository check passed.');
