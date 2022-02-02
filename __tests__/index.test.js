import expectedJson from '../__fixtures__/expectedJson.js';
import expectedPlain from '../__fixtures__/expectedPlain.js';
import expectedStylish from '../__fixtures__/expectedStylish.js';
import genDiff from '../src/index.js';

const path1Json = '__fixtures__/file1.json';
const path2Json = '__fixtures__/file2.json';
const path1Yml = '__fixtures__/file1.yml';
const path2Yaml = '__fixtures__/file2.yaml';
const path1Txt = '__fixtures__/file1.txt';

test('Format json, JSON files', () => {
  expect(genDiff(path1Json, path2Json, 'json'))
    .toBe(expectedJson);
});

test('Format json, YAML files', () => {
  expect(genDiff(path1Yml, path2Yaml, 'json'))
    .toBe(expectedJson);
});

test('Format plain, JSON files', () => {
  expect(genDiff(path1Json, path2Json, 'plain'))
    .toBe(expectedPlain);
});

test('Format plain, YAML files', () => {
  expect(genDiff(path1Yml, path2Yaml, 'plain'))
    .toBe(expectedPlain);
});

test('Format stylish, JSON files', () => {
  expect(genDiff(path1Json, path2Json))
    .toBe(expectedStylish);
});

test('Format stylish, YAML files', () => {
  expect(genDiff(path1Yml, path2Yaml))
    .toBe(expectedStylish);
});

test('Unsupported files', () => {
  expect(() => genDiff(path1Txt, path2Json))
    .toThrowError('Files with extension .txt are not supported');
});
