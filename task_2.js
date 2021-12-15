function take(fn, count) {
    let result = [];
    for(let i = 0; i < count; i++){
        result.push(fn());
    } 
    return result;
};


module.exports = take;
