import _ from 'lodash';

const buildDiffTree = (data1, data2) => {
  const keys = _.sortBy(_.uniq([...Object.keys(data1), ...Object.keys(data2)]));
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
        status: 'added',
      };
    }
    if (!_.has(data2, key)) {
      return {
        key,
        value1,
        status: 'removed',
      };
    }
    if (value1 === value2) {
      return {
        key,
        value1,
        status: 'unchanged',
      };
    }
    return {
      key,
      value1,
      value2,
      status: 'changed',
    };
  });
};

export default buildDiffTree;
