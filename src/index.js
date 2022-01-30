import { readFileSync } from 'fs';
import _ from 'lodash';

const readFileContent = (filepath) => readFileSync(filepath, 'utf8');

const genDiff = (filepathA, filepathB) => {
  const fileContentA = readFileContent(filepathA);
  const fileContentB = readFileContent(filepathB);

  const dataA = JSON.parse(fileContentA);
  const dataB = JSON.parse(fileContentB);

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
