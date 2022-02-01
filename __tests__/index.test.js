import expectedOutputPlain from '../__fixtures__/expectedPlain.js';
import expectedOutputStylish from '../__fixtures__/expectedStylish.js';
import genDiff from '../src/index.js';

const path1Json = '__fixtures__/file1.json';
const path2Json = '__fixtures__/file2.json';
const path1Yml = '__fixtures__/file1.yml';
const path2Yaml = '__fixtures__/file2.yaml';
const path1Txt = '__fixtures__/file1.txt';

test('Plain JSON files', () => {
  expect(genDiff(path1Json, path2Json, 'plain'))
    .toBe(expectedOutputPlain);
});

test('Plain YAML files', () => {
  expect(genDiff(path1Yml, path2Yaml, 'plain'))
    .toBe(expectedOutputPlain);
});

test('Stylish JSON files', () => {
  expect(genDiff(path1Json, path2Json))
    .toBe(expectedOutputStylish);
});

test('Stylish YAML files', () => {
  expect(genDiff(path1Yml, path2Yaml))
    .toBe(expectedOutputStylish);
});

test('Unsupported files', () => {
  expect(() => genDiff(path1Txt, path2Json))
    .toThrowError('Files with extension .txt are not supported');
});
