import getParser from './parsers.js';
import { getFileExt, readFileContent } from './files.js';
import getFormatter from './formatters.js';
import buildDiffTree from './diff.js';

const loadData = (filepath) => {
  const fileExt = getFileExt(filepath);
  const parse = getParser(fileExt);
  const fileContent = readFileContent(filepath);
  return parse(fileContent);
};

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const fileData1 = loadData(filepath1);
  const fileData2 = loadData(filepath2);
  const diffTree = buildDiffTree(fileData1, fileData2);

  const formatDiff = getFormatter(format);
  return formatDiff(diffTree);
};

export default genDiff;
