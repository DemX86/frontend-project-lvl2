import yaml from 'js-yaml';

const getParser = (fileExt) => {
  let parse;
  switch (fileExt) {
    case '.json':
      parse = JSON.parse;
      break;
    case '.yml':
    case '.yaml':
      parse = yaml.load;
      break;
    default:
      throw new Error(`Files with extension ${fileExt} are not supported`);
  }
  return parse;
};

export default getParser;
