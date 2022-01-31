import yaml from 'js-yaml';
import _ from 'lodash';

const PARSERS = {
  '.json': JSON.parse,
  '.yml': yaml.load,
  '.yaml': yaml.load,
};

const getParser = (fileExt) => {
  if (!_.has(PARSERS, fileExt)) {
    throw new Error(`Files with extension ${fileExt} are not supported`);
  }
  return PARSERS[fileExt];
};

export default getParser;
