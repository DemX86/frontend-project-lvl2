import _ from 'lodash';
import yaml from 'js-yaml';

const PARSERS = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
};

const getParser = (fileExt) => {
  if (!_.has(PARSERS, fileExt)) {
    throw new Error(`Files with extension ${fileExt} are not supported`);
  }
  return PARSERS[fileExt];
};

export default getParser;
