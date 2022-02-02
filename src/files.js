import fs from 'fs';
import path from 'path';

const getFileExt = (filepath) => {
  const ext = path.extname(filepath);
  return ext.toLowerCase();
};

const readFileContent = (filepath) => {
  const encoding = 'utf8';
  return fs.readFileSync(filepath, encoding);
};

export { getFileExt, readFileContent };
