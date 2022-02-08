import formatJson from './json.js';
import formatPlain from './plain.js';
import formatStylish from './stylish.js';

const FORMAT_MAPPER = {
  json: formatJson,
  plain: formatPlain,
  stylish: formatStylish,
};

const format = (tree, formatName) => FORMAT_MAPPER[formatName](tree);

export default format;
