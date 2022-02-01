import _ from 'lodash';

const INDENT = ' '.repeat(4);

const formatStylish = (diffTree) => {
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

  const formatLine = (prefix, key, value, depth) => {
    const line = `${prefix} ${key}: ${formatValue(value, depth)}`;
    return line.trimStart();
  };

  const iter = (tree, depth) => {
    const lines = tree.flatMap((node) => {
      if (node.children) {
        return `${node.key}: ${iter(node.children, depth + 1)}`;
      }
      switch (node.type) {
        case 'added':
          return formatLine('+', node.key, node.value2, depth);
        case 'removed':
          return formatLine('-', node.key, node.value1, depth);
        case 'unchanged':
          return formatLine('', node.key, node.value1, depth);
        case 'changed':
          return [
            formatLine('-', node.key, node.value1, depth),
            formatLine('+', node.key, node.value2, depth),
          ];
        default:
          throw new Error(`Unknown node type: ${node.type}`);
      }
    });
    return formatBlock(lines, depth);
  };

  return iter(diffTree, 1);
};

const getFormatter = (format) => {
  if (format === 'stylish') {
    return formatStylish;
  }
  return 'something else'; // todo
};

export default getFormatter;
