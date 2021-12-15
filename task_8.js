const characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
  ];

function pluck(array, key) {
    return array.map(x => x[key]);
    
}

module.exports.characters = characters;
module.exports.pluck = pluck;