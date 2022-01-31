import fs from 'fs';
import path from 'path';

const getFileExt = (filepath) => {
  const ext = path.extname(filepath);
  return ext.toLowerCase();
};

const readFileContent = (filepath) => fs.readFileSync(filepath, 'utf8');

export { getFileExt, readFileContent };
