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
