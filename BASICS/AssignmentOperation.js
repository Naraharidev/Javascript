let a=5;
/*| Operator | Description         | Example                |
| -------- | ------------------- | ---------------------- |
| `=`      | Assign              | `x = 5`                |
| `+=`     | Add and assign      | `x += 3` → `x = x + 3` |
| `-=`     | Subtract and assign | `x -= 2`               |
| `*=`     | Multiply and assign | `x *= 4`               |
| `/=`     | Divide and assign   | `x /= 2`               |
*/
let b;
console.log(b) //undefined
b+=a;
console.log(b); //NaN
b=0;
console.log(b+=a)