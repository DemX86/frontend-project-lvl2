import yaml from 'js-yaml';

const getParser = (fileExt) => {
  let parse;
  if (fileExt === '.json') {
    parse = JSON.parse;
  } else if (fileExt === '.yml' || fileExt === '.yaml') {
    parse = yaml.load;
  } else {
    throw new Error(`Files with extension ${fileExt} are not supported`);
  }
  return parse;
};

export default getParser;
