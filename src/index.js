import fs from 'fs';
import path from 'path';

import buildDiffTree from './diff.js';
import format from './formatters/index.js';
import parse from './parsers.js';

const getFileExt = (filepath) => {
  const ext = path.extname(filepath);
  const extWithoutDot = ext.slice(1);
  return extWithoutDot.toLowerCase();
};

const readFileContent = (filepath) => {
  const encoding = 'utf8';
  return fs.readFileSync(filepath, encoding);
};

const loadData = (filepath) => {
  const fileContent = readFileContent(filepath);
  const fileExt = getFileExt(filepath);
  return parse(fileContent, fileExt);
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const fileData1 = loadData(filepath1);
  const fileData2 = loadData(filepath2);
  const diffTree = buildDiffTree(fileData1, fileData2);
  return format(diffTree, formatName);
};

export default genDiff;
