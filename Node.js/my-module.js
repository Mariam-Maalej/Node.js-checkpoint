const fs = require("fs");

newLines = function (path, fileType, callback) {
  fs.readdir(path, function (err, result) {
    if (err) return callback(err);

    const res = result
      .filter(function (fileName) {
        return fileName.indexOf("." + fileType) !== -1;
      })
      .map((fileName) => {
        return fileName;
      });

    return callback(null, res);
  });
};

module.exports = newLines;
