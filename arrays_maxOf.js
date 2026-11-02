const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const hasCountPrefix = tokens.length > 1 && tokens[0] === tokens.length - 1;
const arr = hasCountPrefix ? tokens.slice(1) : tokens;

if (arr.length === 0) {
    console.log(0);
    return;
}

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max);