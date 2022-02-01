import _ from 'lodash';

const formatValue = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return String(value);
};

const formatPlain = (diffTree) => {
  const iter = (tree, path) => tree
    .filter((node) => node.action !== 'unchanged')
    .flatMap((node) => {
      const pathCurrent = (!path) ? node.key : [path, node.key].join('.');
      if (node.children) {
        return iter(node.children, pathCurrent);
      }
      const line = `Property '${pathCurrent}' was`;
      switch (node.action) {
        case 'added':
          return `${line} added with value: ${formatValue(node.value2)}`;
        case 'removed':
          return `${line} removed`;
        case 'changed':
          return `${line} updated. From ${formatValue(node.value1)} to ${formatValue(node.value2)}`;
        default:
          throw new Error(`Unknown node action: ${node.action}`);
      }
    });
  const lines = iter(diffTree, '');
  return lines.join('\n');
};

export default formatPlain;
