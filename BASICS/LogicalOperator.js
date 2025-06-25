/*
| A     | B     | A && B | A || B   | !A    |
| ----- | ----- | ------ | -------- | ----- |
| true  | true  | true   | true     | false |
| true  | false | false  | true     | false |
| false | true  | false  | true     | true  |
| false | false | false  | false    | true  |

AND->&&
OR ->||
NOT->!

*/
let day="mon"
if(day=="sat" || day=="sun"){
    console.log("It's weekend")
}
else{
    console.log("It's week day")
}
