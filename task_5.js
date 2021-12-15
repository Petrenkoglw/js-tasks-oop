function partial(fn, ...partialArgs) {
    return function(...args) {
      return fn.apply(this, partialArgs.concat(args));
    }
}

function add(a,b){ 
    return a + b;
}

module.exports.add = add;
module.exports.partial = partial;