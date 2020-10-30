const path = process.argv[2]
const fileType = process.argv[3]
const newLines = require('./my-module.js')

newLines(path, fileType, function(err, result) {
    if(err) return err;
    console.log(result.join('\n'));
})