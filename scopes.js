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

function mooEs5() {
    var aEs5 = 1;

    function barEs5() {
        // "use strict"; // doesn't allow implicit variables declaration
        var bEs5 = 2;

        if (bEs5 < 3) {
            var doubleB = bEs5 * 2
            globalEs5 = 5;
            console.log(`doubleB: ${doubleB} globalEs5: ${globalEs5}`);
        }

        function bazEs5() {
            var cEs5 = 3;
            dEs5 = 4;
            console.log(`bazEs5: AEs5: ${aEs5}, BEs5: ${bEs5}, CEs5: ${cEs5}, DEs5: ${dEs5} globalEs5: ${globalEs5}`);
            console.log(`ES5 code block declaration: ${doubleB}`);
        }

        bazEs5();
        console.log(`barEs5: AEs5: ${aEs5}, BEs5: ${bEs5} globalEs5: ${globalEs5}`);
        // cEs5, dEs5 are not defined
    }

    barEs5();
    console.log(`mooEs5: AEs5: ${aEs5} globalEs5: ${globalEs5}`);
    // bEs5, cEs5, dEs5 are not defined
}

mooEs5();
console.log(`global: DEs5: ${dEs5}`);

function mooEs6() {
    const aEs6 = 1;

    function barEs6() {
        const bEs6 = 2;

        if (bEs6 < 3) {
            const doubleBEs6 = bEs6 * 2
            globalEs6 = 5;
            console.log(`doubleBEs6: ${doubleBEs6} globalEs6: ${globalEs6}`);
        }

        function bazEs6() {
            const cEs6 = 3;
            dEs6 = 4;
            console.log(`baz: AEs6: ${aEs6}, BEs6: ${bEs6}, CEs6: ${cEs6}, DEs6: ${dEs6}, globalEs6: ${globalEs6}`);
            // console.log(`ES6 code block declaration: ${doubleBEs6}`); // doubleBes6 is not defined
        }

        bazEs6();
        console.log(`barEs6: AEs6: ${aEs6}, BEs6: ${bEs6} globalEs6: ${globalEs6}`);
        // cEs6, dEs6 are not defined
    }

    barEs6();
    console.log(`mooEs6: AEs6: ${aEs6} globalEs6: ${globalEs6}`);
    // bEs6, cEs6, dEs6 are not defined
}

mooEs6();
console.log(`global: DEs6: ${dEs6}, globalEs6: ${globalEs6}`);

var aa = 42;
(function IIFE() {
    var aa = 10;
    console.log(aa);
})();
console.log(aa);

var bb = 44;

function notIIFE() {
    var bb = 22;
    console.log(bb);
}

notIIFE();
console.log(bb);

global.x = 5;
console.log(`X: ${x}`);

function foo(x) {
    var y = global.x * 2;

    console.log(`GLOBAL.X: ${global.x}`);

    function bar(z) {
        console.log('BAR', 'X', x, 'Y', y, 'Z', z);
    }

    bar(y * 3);
}

foo(2);

function boo(str, a) {
    // 'use strict'; // in strict mode eval won't affect the enclosing scope
    eval(str); // cheating!
    console.log('A', a, 'BBB', bbb);
}

var bbb = 2;
console.log(`BBB: ${bbb}`);
boo("var bbb = 3;", 1);

function too() {
    function tar(a) {
        var i = 3; // changing the `i` in the enclosing scope's
// for-loop
        console.log('TAR', a + i);
    }

    for (var i = 0; i < 10; i++) {
        tar(i * 2); // oops, inifinite loop ahead!
    }
}

too();

// namespace
var MyReallyCoolLibrary = {
    awesome: Math.random()
};

var MyCoolLibrary = {
    awesome: Math.random()
};

var aa = 2;
(function () {
    var aa = 3;
    console.log(`IIFE: ${aa}`);
})();
(function () {
    var aa = 3;
    console.log(`IIFE2: ${aa}`);
}());
(function (globalA) {
    console.log(`IIFE global aa: ${aa}`);
})(aa); // IIFE with arguments
console.log(`GLOBAL AA: ${aa}`);

const libA = require('./libA');
const libB = require('./libA');
console.log(libA.awesome);
console.log(libB.awesome);
console.log(MyCoolLibrary.awesome);
console.log(MyReallyCoolLibrary.awesome);

// undefined = true; // setting a land-mine for other code! avoid!
(function IIFE(undefined) {
    var a;
    if (a === undefined) {
        console.log("Undefined is safe here!");
    }
})();

// Universal Module Definition IIFE pattern
aaa = 2;
(function IIFE(def) {
    def(global);
})(function def(global) {
    var aaa = 3;
    console.log(aaa); // 3
    console.log(global.aaa); // 2
});

for (var j = 0; j < 2; j++) {
    console.log(`LOOP j ${j}`);
}
console.log(`OUTER SCOPE j: ${j}`);

if (j === 2) {
    var k = j;
    console.log(`IF k ${k}`);
}
console.log(`OUTER SCOPE k: ${k}`);

try {
    var z = 5;
    console.log(`TRY: ${z}`);
} catch (e) {
    console.log(`TRY ERR: ${e}`);
}

console.log(`OUTER SCOPE z: ${z}`);

// explicit attachment of the variable bar to the block scope
var fooo = true;
if (fooo) {
    { // <-- explicit block
        let bar = fooo * 2;
        // bar = something(bar);
        console.log(bar);
    }
}
// console.log( bar ); // ReferenceError

// block scoping is useful for garbage collector
function process(data) {
// do something interesting
}

// anything declared inside this block can go away after!
{
    let someReallyBigData = {};
    process(someReallyBigData);
}
/*var btn = document.getElementById("my_button");
btn.addEventListener("click", function click(evt) {
    console.log("button clicked");
}, /!*capturingPhase=*!/false);*/ // btn-related functionality doesn't use someReallyBigData so it doesn't need to access it

(function scope() {
    var sc = 5;
    console.log(`FUNCTION SCOPE: ${sc}`);
})();
// console.log(`OUTER SC: ${sc}`); // ReferenceError

va = 2;
var va;
console.log(va); // 2; its declaration is hoisted first and then value was assigned

console.log(bbbb); // undefined; its declaration is hoisted but no value is assigned yet
var bbbb = 4;

// ffoo(); // not ReferenceError, but TypeError! - declared but no value assigned
// bbar(); // ReferenceError - since it's function expression - it's not declared yet
var ffoo = function bbar() {
// ...
};

// functions declared first, then variables
fffoo(); // 1
var fffoo; // was the duplicate (and thus ignored) declaration

function fffoo() {
    console.log(1);
}

fffoo = function () {
    console.log(2);
};

// while multiple/duplicate var declarations are effectively ignored,
// subsequent function declarations do override previous ones.

fffooo(); // 3
function fffooo() {
    console.log(1);
}

var fffooo = function () {
    console.log(2);
};

function fffooo() {
    console.log(3);
}

// function declarations that appear inside of normal blocks typically
// hoist to the enclosing scope

// bboo(); // "b" in ES6 throws a TypeError
var a = true;
if (a) {
    function bboo() { console.log("a"); }
}
else {
    function bboo() { console.log("b"); }
}
