import formatJson from './json.js';
import formatPlain from './plain.js';
import formatStylish from './stylish.js';

const getFormatter = (formatName) => {
  let format;
  switch (formatName) {
    case 'json':
      format = formatJson;
      break;
    case 'plain':
      format = formatPlain;
      break;
    case 'stylish':
      format = formatStylish;
      break;
    // no default
  }
  return format;
};

export default getFormatter;
