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
    .filter((node) => node.status !== 'unchanged')
    .flatMap((node) => {
      const pathCurrent = (!path) ? node.key : [path, node.key].join('.');
      if (node.children) {
        return iter(node.children, pathCurrent);
      }
      const line = `Property '${pathCurrent}' was`;
      return {
        added: `${line} added with value: ${formatValue(node.value2)}`,
        removed: `${line} removed`,
        changed: `${line} updated. From ${formatValue(node.value1)} to ${formatValue(node.value2)}`,
      }[node.status];
    });
  const lines = iter(diffTree, '');
  return lines.join('\n');
};

export default formatPlain;
