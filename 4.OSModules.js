const os = require('os');

console.log (os.freemem()); //! Show the Free memory of the PC
console.log (os.homedir()); //! Show the Home Directory of PC
console.log (os.hostname()); //! Show the hostname of PC(AISHA)
console.log (os.release()); //! Returns release verion of os
console.log (os.arch()); //! Show the operating system CPU architecture for which the Node.js binary was compiled.
// console.log(os.networkInterfaces());
console.log(os.platform()); //! Returns the Operating system platform
console.log(os.uptime());
console.log(os.userInfo());
console.log(os.version());
// console.log(os.cpus());//! Show the CPU configuration