import _ from 'lodash';

const buildDiffTree = (data1, data2) => {
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
  return keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return {
        key,
        type: 'nested',
        children: buildDiffTree(value1, value2),
      };
    }
    if (!_.has(data1, key)) {
      return {
        key,
        type: 'added',
        value2,
      };
    }
    if (!_.has(data2, key)) {
      return {
        key,
        type: 'removed',
        value1,
      };
    }
    if (value1 === value2) {
      return {
        key,
        type: 'unchanged',
        value1,
      };
    }
    return {
      key,
      type: 'changed',
      value1,
      value2,
    };
  });
};

export default buildDiffTree;
