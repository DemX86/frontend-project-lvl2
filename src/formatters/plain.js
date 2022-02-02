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
      let line = `Property '${pathCurrent}' was`;
      switch (node.status) {
        case 'added':
          line = `${line} added with value: ${formatValue(node.value2)}`;
          break;
        case 'removed':
          line = `${line} removed`;
          break;
        case 'changed':
          line = `${line} updated. From ${formatValue(node.value1)} to ${formatValue(node.value2)}`;
          break;
        // no default
      }
      return line;
    });
  const lines = iter(diffTree, '');
  return lines.join('\n');
};

export default formatPlain;
