if (!Number.isNaN) {
    Number.isNaN = function isNaN(x) {
        return x !== x;
    };
}

