let sequence = require('./task_1');
let take = require('./task_2');
let map = require('./task_3').map;
let square = require('./task_3').square;
let fmap = require('./task_4');
let partial = require('./task_5').partial;
let add = require('./task_5').add;
let partialAny = require('./task_6').partialAny;
let test = require('./task_6').test;
let bind = require('./task_7').bind;
let testThis = require('./task_7').testThis;
let task_8_pluck = require('./task_8');
let task_9_filter = require('./task_9');
let task_10_count = require('./task_10');

const generator_start = 1; //Task 1
const generator_step = 1;
const take_count = 5;   //Task 2
const task3_array = [1,2,3];    // Task 3 
const task_5_add_arg_1 = 5; //Task 5
const task_5_add_arg_2 = 5; 
const ctx = { x: 2 }; // Task 7

const generator = sequence(generator_start, generator_step);


console.log(`Task 1: sequence(${generator_start}, ${generator_step})`);
console.log(generator());
console.log(generator());
console.log(generator());

console.log(`Task 2: take(generator, ${take_count})`);
console.log(take(generator, take_count));

console.log(`Task 3: map(square, ${task3_array}`);
console.log('First call => ',map(square, task3_array));
console.log('Wiyhout sideeffect.Next call => ', map(square, task3_array));

console.log(`Task 4: fmap(square, generator)`);
let task_4_gen = sequence(1,1);
let squareGen = fmap(square, task_4_gen);
console.log(squareGen());
console.log(squareGen());
console.log(squareGen());


console.log(`Task 5: partial(add, ${task_5_add_arg_1})`);
let add_first_arg = partial(add, task_5_add_arg_1);
console.log(`Add ${task_5_add_arg_2} to partial(): ${add_first_arg(task_5_add_arg_2)}`);

console.log(`Task 6: partialAny(test, 1, undefined, 3) `);
let test1_3 = partialAny(test, 1, undefined, 3);
console.log(test1_3(5,6,7));

console.log(`Task 7: bind(testThis, ctx)`);
let boundFunction = bind(testThis, ctx);
console.log(`boundFunction(100): ${boundFunction(100)}`);

console.log(`Task 8: pluck(characters, 'name')`);
console.log(task_8_pluck.pluck(task_8_pluck.characters, 'name'));

console.log(`Task 9: filter(array, isEven)`);
console.log(task_9_filter.filter(task_9_filter.input, task_9_filter.isEven));

console.log(`Task 10: count(ctx)`);
console.log(task_10_count(ctx));
