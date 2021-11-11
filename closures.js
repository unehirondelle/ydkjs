function makeAdder(x) {
    function add(y) {
        return y + x;
    }

    return add;
}

const addTen = makeAdder(10);
console.log(`REFERENCE: ${makeAdder(5)}\nCALL: ${makeAdder(5)(1)} \nANOTHER_REFERENCE: ${addTen}\nANOTHERCALL: ${addTen(1)}`);

let bbb = 5;
if (bbb < 6) {
    console.log(bbb);
    bbb = 6;
    console.log(bbb);
}
console.log(bbb);

function foo() {
    var a = 2;

    function bar() {
        console.log('closure bar A:', a);
    }

    return bar;
}

var baz = foo();
baz(); // 2 -- Whoa, closure was just observed, man.
// Garbage collector didn't touch the inner scope of foo() because it's still in use by bar()

function ffoo() {
    var aa = 2;

    function bazz() {
        console.log('BAZZ', aa); // 2
    }

    barr(bazz);
}

function barr(fn) {
    fn(); // look ma, I saw closure!
}

ffoo();

// indirect passing-around of functions
var fn;

function fooo() {
    var a = 2;

    function baaz() {
        console.log('BAAZ', a);
    }

    fn = baaz; // assign baz to global variable
}

function baar() {
    fn(); // look ma, I saw closure!
}

fooo();
baar(); // 2

// timer has a scope closure over the scope of wait()
function wait(message) {
    setTimeout(function timer() {
        console.log(message);
    }, 1000);
}

wait("Hello, closure!");

// closure in loops
for (var i = 1; i <= 5; i++) {
    console.log('loop', i);
    var j = i; // it doesn't help because var is not block-scoped declaration and leaks to the outer scope
    setTimeout(function timer() {
        console.log(j); // 5 times of six when i declared with var; 1, 2, 3, 4, 5 when i declared with let
    }, j * 1000);
}

for (var k = 1; k <= 5; k++) {
    (function () {
        var j = k; // without this IIFE's scope is empty and acts like the loop above,
                   // even though j is declared with var it works because it's inside the function's scope
        setTimeout(function timer() {
            console.log(j);
        }, k * 1000);
    })();
}

for (let i = 1; i <= 5; i++) { // iterators declared with let are declared each iteration
    setTimeout(function timer() {
        console.log(i);
    }, i * 1000);
}

