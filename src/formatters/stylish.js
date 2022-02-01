import _ from 'lodash';

const INDENT = ' '.repeat(4);

const formatBlock = (lines, depth) => {
  const linesFormatted = lines.map((line) => {
    if (line.startsWith('+') || line.startsWith('-')) {
      return `${INDENT.repeat(depth - 1)}  ${line}`;
    }
    return `${INDENT.repeat(depth)}${line}`;
  });
  return ['{', ...linesFormatted, `${INDENT.repeat(depth - 1)}}`].join('\n');
};

const formatValue = (value, depth) => {
  if (!_.isPlainObject(value)) {
    return value;
  }
  const lines = Object.entries(value)
    .map(([k, v]) => `${k}: ${formatValue(v, depth + 1)}`);
  return formatBlock(lines, depth + 1);
};

const formatStylish = (diffTree) => {
  const iter = (tree, depth) => {
    const lines = tree.flatMap((node) => {
      if (node.children) {
        return `${node.key}: ${iter(node.children, depth + 1)}`;
      }
      switch (node.action) {
        case 'added':
          return `+ ${node.key}: ${formatValue(node.value2, depth)}`;
        case 'removed':
          return `- ${node.key}: ${formatValue(node.value1, depth)}`;
        case 'unchanged':
          return `${node.key}: ${formatValue(node.value1, depth)}`;
        case 'changed':
          return [
            `- ${node.key}: ${formatValue(node.value1, depth)}`,
            `+ ${node.key}: ${formatValue(node.value2, depth)}`,
          ];
        default:
          throw new Error(`Unknown node action: ${node.action}`);
      }
    });
    return formatBlock(lines, depth);
  };

  return iter(diffTree, 1);
};

export default formatStylish;