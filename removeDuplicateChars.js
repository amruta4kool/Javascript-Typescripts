
const data = require('fs').readFileSync(0, 'utf8');
const str = data.trim();

let result = "";

for (const ch of str) {
    if (!result.includes(ch)) {
        result += ch;
    }
}

console.log(result);
