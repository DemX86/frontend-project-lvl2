import _ from 'lodash';
import getParser from './parsers.js';
import { getFileExt, readFileContent } from './files.js';

const loadData = (filepath) => {
  const fileExt = getFileExt(filepath);
  const parse = getParser(fileExt);
  const fileContent = readFileContent(filepath);
  return parse(fileContent);
};

const genDiff = (filepathA, filepathB) => {
  const dataA = loadData(filepathA);
  const dataB = loadData(filepathB);

  const keys = _.sortBy(_.uniq([...Object.keys(dataA), ...Object.keys(dataB)]));
  const rs = keys.flatMap((key) => {
    if (!_.has(dataA, key)) {
      return [`+ ${key}: ${dataB[key]}`];
    }
    if (!_.has(dataB, key)) {
      return [`- ${key}: ${dataA[key]}`];
    }
    if (dataA[key] === dataB[key]) {
      return [`  ${key}: ${dataA[key]}`];
    }
    return [`- ${key}: ${dataA[key]}`, `+ ${key}: ${dataB[key]}`];
  });

  return `{\n  ${rs.join('\n  ')}\n}`;
};

export default genDiff;
