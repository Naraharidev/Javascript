
//declarative funcion

/*
✅ Characteristics:
Hoisted (can be used before they are declared)

Reusable by name

Easy to read and debug (name shows in stack traces)
*/

function helloOne(){
    console.log('hello one')
}

helloOne()

//anoymus function
/*
✅ Characteristics:
Not hoisted (must be declared before use)

Mostly used as inline/callback functions

Less descriptive in debugging (no name in stack trace)


*/

var helloTwo=function(){
    console.log('hello two')
}

helloTwo()

//ES6 function or arrow function

var helloThree=()=>{
    console.log('hello three')
}

helloThree()

//function with arguments

function printString(name){
    console.log(name)
}

printString('four')

//function with return type

function addition(a,b){
    return a+b
}

let add=addition(4,7)
console.log(add)

//import a method from other folder

import {importing} from '../HELPER/importFunction.js'
importing()

//import every function from other folder

import * as im from '../HELPER/importFunction.js'

im.importing()