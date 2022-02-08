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

const stringify = (value, depth) => {
  if (!_.isPlainObject(value)) {
    return value;
  }
  const lines = Object.entries(value)
    .map(([k, v]) => `${k}: ${stringify(v, depth + 1)}`);
  return formatBlock(lines, depth + 1);
};

const formatStylish = (diffTree) => {
  const iter = (tree, depth) => {
    const lines = tree.flatMap((node) => {
      if (_.has(node, 'children')) {
        return `${node.key}: ${iter(node.children, depth + 1)}`;
      }
      return {
        added: `+ ${node.key}: ${stringify(node.value2, depth)}`,
        removed: `- ${node.key}: ${stringify(node.value1, depth)}`,
        unchanged: `${node.key}: ${stringify(node.value1, depth)}`,
        changed: [
          `- ${node.key}: ${stringify(node.value1, depth)}`,
          `+ ${node.key}: ${stringify(node.value2, depth)}`,
        ],
      }[node.type];
    });
    return formatBlock(lines, depth);
  };

  return iter(diffTree, 1);
};

export default formatStylish;
