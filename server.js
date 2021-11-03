const express = require('express');
const app = express();
const PORT = 5555;
app.listen(PORT);

// do ... while and while loops

let numOfCustomers = 2;

while (numOfCustomers > 0) {
    console.log(`WHILE: customers: ${numOfCustomers} \nHow may I help you? \n---`);
// help the customer...
    numOfCustomers = numOfCustomers - 1;
}
// versus:
do {
    console.log(`DO WHILE: customers: ${numOfCustomers} \nHow may I help you? \n---`);
// help the customer...
    numOfCustomers = numOfCustomers - 1;
} while (numOfCustomers > 0);


let i = 0;
// a `while..true` loop would run forever, right?
while (true) {
// keep the loop going?
    if (i <= 9) {
        console.log(`WHILE TRUE: ${i}`);
        i = i + 1;
    }
// time to stop the loop!
    else {
        break;
    }
    // console.log('I\'m infinite'); // if no else with break
}


//scopes
function outer() {
    let a = 1;

    function inner() {
        let b = 2;
// we can access both `a` and `b` here
        console.log(`INNER: A+B: ${a + b}`); // 3
    }

    inner();
// we can only access `a` here
    console.log(`OUTER: A: ${a}`); // 1, b would be not defined
}

outer();

// values & types
function foo() {
    return 42;
}

foo.bar = "hello world";
console.log(`FOO: ${typeof foo}\nFOO(): ${typeof foo()}\nFOO.BAR: ${typeof foo.bar}`);

let obj = {
    a: 'something',
    b: 5
};

console.log(typeof String(obj.b)); // 'string'
console.log(typeof new String(obj.b)); // 'object'
console.log(String(5) === '5'); //true
console.log(new String(5) === '5'); //false

let s_prim = 'foo';
let s_obj = new String(s_prim);
console.log(`S_PRIM ${typeof s_prim}`); // Logs "string"
console.log(`S_OBJ ${typeof s_obj}`);  // Logs "object"

let s1 = '2 + 2';             // creates a string primitive
let s2 = new String('2 + 2');  // creates a String object
console.log(`S1 ${eval(s1)} ${typeof eval(s1)}`);         // returns the number 4
console.log(`S2 ${eval(s2)}`);         // returns the string "2 + 2"


function test() {
    const x = 2, y = 4;
    // Direct call, uses local scope
    console.log(eval('x + y')); // Result is 6
    // Indirect call using the comma operator to return eval
    // console.log((0, eval)('x + y')); // Uses global scope, throws because x is undefined
    // Indirect call using a variable to store and return eval
    // let geval = eval;
    // console.log(geval('x + y')); // Uses global scope, throws because x is undefined
}

test();

let a = [1,2,3];
let b = [1,2,3];
let c = "1,2,3";

console.log(`${a==c}\n${b==c}\n${a==b}`);


