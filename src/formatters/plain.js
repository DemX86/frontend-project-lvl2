import _ from 'lodash';

const stringify = (value) => {
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
    .filter((node) => node.type !== 'unchanged')
    .flatMap((node) => {
      const pathCurrent = (!path) ? node.key : [path, node.key].join('.');
      if (_.has(node, 'children')) {
        return iter(node.children, pathCurrent);
      }
      const line = `Property '${pathCurrent}' was`;
      return {
        added: `${line} added with value: ${stringify(node.value2)}`,
        removed: `${line} removed`,
        changed: `${line} updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`,
      }[node.type];
    });
  const lines = iter(diffTree, '');
  return lines.join('\n');
};

export default formatPlain;
