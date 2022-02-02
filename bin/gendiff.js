#!/usr/bin/env node

import { Command, Option } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference')
  .version('1.0.0')
  .addOption(new Option('-f, --format <type>', 'output format')
    .choices(['json', 'plain', 'stylish'])
    .default('stylish'))
  .argument('filepath1')
  .argument('filepath2')
  .action((filepath1, filepath2, { format: formatName }) => {
    const diff = genDiff(filepath1, filepath2, formatName);
    console.log(diff);
  });

program.parse();
