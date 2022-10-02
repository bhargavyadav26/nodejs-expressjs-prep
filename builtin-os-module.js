const os = require('os');

console.log(os.userInfo()); //gives current user info

console.log(`The system uptime is ${os.uptime()} seconds`); //gives system uptime