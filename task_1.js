function sequence(start = 0, step = 1) {
    let counter = start;
    return () => {
        let temp = counter;
        counter += step;
        return temp;
    }
}

module.exports = sequence;

