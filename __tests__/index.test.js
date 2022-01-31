import genDiff from '../src/index.js';

const expectedOutput = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('JSON files', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json'))
    .toStrictEqual(expectedOutput);
});

test('YAML files', () => {
  expect(genDiff('__fixtures__/file1.yml', '__fixtures__/file2.yaml'))
    .toStrictEqual(expectedOutput);
});

test('Unsupported files', () => {
  expect(() => genDiff('__fixtures__/file1.txt', '__fixtures__/file2.json'))
    .toThrowError('Files with extension .txt are not supported');
});
