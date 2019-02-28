/*
  Custom webpack loader that imports global less files

  options:
  {
    // array of strings / file names in the global less directory to include
    // sorted based on how they should appear as imports (from top to bottom)
    globalFiles: ['variables', 'mixins'],

    // string - Webpack alias that resolves the less folder where the global files are located
    globalAlias: "~less"
  }
 */

const loaderUtils = require('loader-utils');
const reduce = require('lodash/reduce');

const getFinalListOfFileNamesToInclude = ({ fileNamesToInclude, fileName }) => {
  const index = fileNamesToInclude.indexOf(fileName);
  if (index >= 0) {
    return fileNamesToInclude.slice(0, index);
  }
  return fileNamesToInclude;
};

const appendImports = ({ fileNamesToInclude, source, alias }) =>
  reduce(
    fileNamesToInclude,
    (existingImports, fileNameToInclude) => {
      return `${existingImports}\n @import "${alias}/${fileNameToInclude}.less";`;
    },
    source,
  );

const addGlobalImports = ({ fileNamesToInclude, fileName, source, alias }) => {
  const finalListOfFileNamesToInclude = getFinalListOfFileNamesToInclude({
    fileNamesToInclude,
    fileName,
  });
  return appendImports({
    fileNamesToInclude: finalListOfFileNamesToInclude,
    source,
    alias,
  });
};

module.exports = function lessGlobalImports(source) {
  const options = loaderUtils.getOptions(this);

  const fileType = loaderUtils.interpolateName(this, '[ext]', {});
  const fileName = loaderUtils.interpolateName(this, '[name]', {});
  const fileNamesToInclude = (options && options.globalFiles) || [];
  const alias = (options && options.globalAlias) || '';

  let processedLess = source;
  if (fileType === 'less') {
    processedLess = addGlobalImports({
      fileNamesToInclude,
      fileName,
      source,
      alias,
    });
  }

  return processedLess;
};
