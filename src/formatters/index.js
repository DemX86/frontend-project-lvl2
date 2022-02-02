import formatJson from './json.js';
import formatPlain from './plain.js';
import formatStylish from './stylish.js';

const FORMATTERS = {
  json: formatJson,
  plain: formatPlain,
  stylish: formatStylish,
};

const getFormatter = (formatName) => FORMATTERS[formatName];

export default getFormatter;
