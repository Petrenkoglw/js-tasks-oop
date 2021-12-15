function bind(fn, context) {
    return (...args) => fn.apply(context, args);
}

function testThis(a) { 
    return ("x=" + this.x + ", a=" + a); 
}

module.exports.bind = bind;
module.exports.testThis = testThis;