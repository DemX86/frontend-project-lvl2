import _ from 'lodash';

const INDENT = ' '.repeat(4);

const formatBlock = (lines, depth, nodeType, isSeparateBlock = false) => {
  const getBraces = (type) => {
    let braces;
    switch (type) {
      case 'array':
        braces = '[]';
        break;
      case 'object':
        braces = '{}';
        break;
      // no default
    }
    return braces;
  };

  const [braceOpening, braceClosing] = getBraces(nodeType);
  let block = [
    braceOpening,
    lines.join(',\n'),
    `${INDENT.repeat(depth - 1)}${braceClosing}`,
  ].join('\n');
  if (isSeparateBlock) {
    block = `${INDENT.repeat(depth - 1)}${block}`;
  }
  return block;
};

const formatJson = (diffTree) => {
  const iter = (node, depth, isSeparateBlock = false) => {
    if (_.isPlainObject(node)) {
      const entries = Object.entries(node);
      const lines = entries
        .filter(([, value]) => value !== undefined)
        .flatMap(([key, value]) => {
          const keyFormatted = `${INDENT.repeat(depth)}"${key}"`;
          const valueFormatted = `${iter(value, depth + 1)}`;
          return `${keyFormatted}: ${valueFormatted}`;
        });
      return formatBlock(lines, depth, 'object', isSeparateBlock);
    }
    if (_.isArray(node)) {
      const isSeparateBlockUpd = true;
      const lines = node
        .filter((item) => item !== undefined)
        .flatMap((item) => iter(item, depth + 1, isSeparateBlockUpd));
      return formatBlock(lines, depth, 'array');
    }
    if (_.isString(node)) {
      return `"${node}"`;
    }
    return String(node);
  };
  return iter(diffTree, 1);
};

export default formatJson;
