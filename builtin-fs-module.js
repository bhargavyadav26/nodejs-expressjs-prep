const {readFileSync, writeFileSync, write} = require('fs');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first,second);

//writeFileSync: creates a new file if there's no file with the given name
//if the file is there, then it will replace the content with our mentioned content
writeFileSync('./content/new-file.txt','This is a new content')

//if we want to just add or update the content along with existing content
writeFileSync('./content/new-file.txt', 'This is extra data', {flag: 'a'})