const data = require('fs').readFileSync(0, 'utf8');
const str = data.trim().toLowerCase();

const reverse = str.split('').reverse().join('');

if (str === reverse) {
    console.log("YES Palindrome");
} else {
    console.log("NO Not a Palindrome");
}