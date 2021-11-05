function makeAdder(x) {
    function add(y) {
        return y + x;
    }

    return add;
}

const addTen = makeAdder(10);
console.log(`REFERENCE: ${makeAdder(5)}\nCALL: ${makeAdder(5)(1)} \nANOTHER_REFERENCE: ${addTen}\nANOTHERCALL: ${addTen(1)}`);

let bbb = 5
if (bbb < 6) {
    console.log(bbb)
    bbb = 6
    console.log(bbb)
}

console.log(bbb)
