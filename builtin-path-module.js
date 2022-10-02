const path = require('path');

console.log(path.sep);

const filePath = path.join('/content','subcontent','documentation');
console.log(filePath);

//for last base in the path
const base = path.basename(filePath);
console.log(base);

//Absolute path i.e., whole path (we need to provide the folder and file directory to get complete path)
const absolute = path.resolve(__dirname,'content','subcontent','documentation')
console.log(absolute);