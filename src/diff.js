import _ from 'lodash';

const buildDiffTree = (data1, data2) => {
  const keys = _.sortBy(_.uniq([...Object.keys(data1), ...Object.keys(data2)]));
  return keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    const node = {
      key,
      value1,
      value2,
      action: null,
      children: null,
    };
    if (_.isPlainObject(value1) && _.isPlainObject(value2) && value1 !== null && value2 !== null) {
      node.children = buildDiffTree(value1, value2);
    } else if (!_.has(data1, key)) {
      node.action = 'added';
    } else if (!_.has(data2, key)) {
      node.action = 'removed';
    } else if (value1 === value2) {
      node.action = 'unchanged';
    } else {
      node.action = 'changed';
    }
    return node;
  });
};

export default buildDiffTree;
