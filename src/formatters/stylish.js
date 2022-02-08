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

const mapper = {
  added: (node, depth) => `+ ${node.key}: ${stringify(node.value2, depth)}`,
  removed: (node, depth) => `- ${node.key}: ${stringify(node.value1, depth)}`,
  unchanged: (node, depth) => `${node.key}: ${stringify(node.value1, depth)}`,
  changed: (node, depth) => [
    `- ${node.key}: ${stringify(node.value1, depth)}`,
    `+ ${node.key}: ${stringify(node.value2, depth)}`,
  ],
  nested: (node, depth, iter) => `${node.key}: ${iter(node.children, depth + 1)}`,
};

const formatStylish = (diffTree) => {
  const iter = (tree, depth) => {
    const lines = tree.flatMap((node) => mapper[node.type](node, depth, iter));
    return formatBlock(lines, depth);
  };
  return iter(diffTree, 1);
};

export default formatStylish;
