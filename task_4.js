function fmap(a, gen){
    return (...args) => {
        return a(gen.apply(null, args));
    }
}

module.exports = fmap;