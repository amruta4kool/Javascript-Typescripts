const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0];
// Write your solution here
const reverse = str.split('').reverse().join('');
console.log(reverse)