import formatPlain from './plain.js';
import formatStylish from './stylish.js';

const getFormatter = (formatName) => {
  let format;
  if (formatName === 'plain') {
    format = formatPlain;
  } else if (formatName === 'stylish') {
    format = formatStylish;
  }
  return format;
};

export default getFormatter;
