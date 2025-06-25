/*
| Method           | Description                  |
| ---------------- | ---------------------------- |
| `.length`        | Get string length            |
| `.charAt(i)`     | Get character at index       |
| `.toUpperCase()` | Convert to upper case        |
| `.substring()`   | Extract part of string       |
| `.includes()`    | Check if string contains     |
| `.replace()`     | Replace substring            |
| `.split()`       | Convert string to array      |
| `.trim()`        | Remove whitespace            |
| `.concat()`      | Combine strings              |
| `.repeat()`      | Repeat string multiple times |
*/

let str="siva siva";
//Length of string
console.log(str.length)
//char at index
console.log(str.charAt(0));
console.log(str[2])
//repeat
console.log(str.repeat(8))
//indexOf
console.log(str.indexOf('w'))
//substring
console.log(str.slice(4))
console.log(str.substring(0,3))
console.log(str.split(' '))
