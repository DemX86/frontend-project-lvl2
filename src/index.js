import buildDiffTree from './diff.js';
import getFormatter from './formatters/index.js';
import getParser from './parsers.js';
import { getFileExt, readFileContent } from './files.js';

const loadData = (filepath) => {
  const fileExt = getFileExt(filepath);
  const parse = getParser(fileExt);
  const fileContent = readFileContent(filepath);
  return parse(fileContent);
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const fileData1 = loadData(filepath1);
  const fileData2 = loadData(filepath2);
  const diffTree = buildDiffTree(fileData1, fileData2);

  const format = getFormatter(formatName);
  return format(diffTree);
};

export default genDiff;
