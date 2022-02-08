import _ from 'lodash';

const buildDiffTree = (data1, data2) => {
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
  return keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return {
        key,
        children: buildDiffTree(value1, value2),
      };
    }
    if (!_.has(data1, key)) {
      return {
        key,
        value2,
        type: 'added',
      };
    }
    if (!_.has(data2, key)) {
      return {
        key,
        value1,
        type: 'removed',
      };
    }
    if (value1 === value2) {
      return {
        key,
        value1,
        type: 'unchanged',
      };
    }
    return {
      key,
      value1,
      value2,
      type: 'changed',
    };
  });
};

export default buildDiffTree;
