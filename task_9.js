const input = [1, 2, 3, 4, 5, 6];

function isEven(x) {
    return x % 2 == 0;
 }


function filter(input, isEven){
    return input.filter(x => isEven(x));
}

module.exports.input = input;
module.exports.isEven = isEven;
module.exports.filter = filter;
