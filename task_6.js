function partialAny(fn, ...partialArgs) {
    let newArgs;
    return function(...args) {
        let temp = args;
        newArgs = partialArgs.map(x => x === undefined ? temp.shift(): x);
        newArgs = [...newArgs, ...temp];
        return fn.apply(this, newArgs);
    }
}

function test(a, b, c) { 
    return 'a=' + a + ',b=' + b + ',c=' + c; 
}

module.exports.partialAny = partialAny;
module.exports.test = test;