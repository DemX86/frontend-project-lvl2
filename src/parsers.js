import _ from 'lodash';
import yaml from 'js-yaml';

const PARSER_MAPPER = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
};

const parse = (content, ext) => {
  if (!_.has(PARSER_MAPPER, ext)) {
    throw new Error(`Files with extension ${ext} are not supported`);
  }
  return PARSER_MAPPER[ext](content);
};

export default parse;
