let settlements = [
    {"name": "Yokohama",
     "Population": 39105},
     {"name": "Jakarta",
     "Population": 35362},
     {"name": "Manila",
     "Population": 23971},
     {"name": "Delhi",
     "Population": 31870},


]

function compare(a, b){
    return b - a;
}

function sorter(array, n){
    return settlements.sort((x,y) => compare(x.Population,y.Population));
}

console.log(sorter(settlements, 5));