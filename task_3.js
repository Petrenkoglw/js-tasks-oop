function map(fn, array) {
    return array.map(x => fn(x));
}

function square(x) {
    return x * x;
}

module.exports.map = map;
module.exports.square = square;