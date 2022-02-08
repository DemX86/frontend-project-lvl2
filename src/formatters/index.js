import formatPlain from './plain.js';
import formatStylish from './stylish.js';

const FORMAT_MAPPER = {
  json: (tree) => JSON.stringify(tree, null, 4),
  plain: formatPlain,
  stylish: formatStylish,
};

const format = (tree, formatName) => FORMAT_MAPPER[formatName](tree);

export default format;
