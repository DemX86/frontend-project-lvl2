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

const mapper = {
  added: (node, path) => `Property '${path}' was added with value: ${stringify(node.value2)}`,
  removed: (node, path) => `Property '${path}' was removed`,
  changed: (node, path) => `Property '${path}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`,
  nested: (node, path, iter) => iter(node.children, path),
};

const formatPlain = (diffTree) => {
  const iter = (tree, path) => tree
    .filter((node) => node.type !== 'unchanged')
    .flatMap((node) => {
      const pathCurrent = (!path) ? node.key : [path, node.key].join('.');
      return mapper[node.type](node, pathCurrent, iter);
    });
  const lines = iter(diffTree, '');
  return lines.join('\n');
};

export default formatPlain;
