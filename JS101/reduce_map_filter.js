// reduce()

// let arr = [1,2,3,4];

let sum = arr.reduce((acc, val) => {
  return acc + val;
});

let sum1 = arr.reduce((acc, val) => {
  return acc + val;
}, 100); // 100 is ithe initia value, default is zero

let sum2 = arr.reduce((acc, val) => acc + val, 100);
// w/ arrow function

let data = [
  {
    country: 'China',
    pop: 1409517397,
  },
  {
    country: 'India',
    pop: 1339180127,
  },
  {
    country: 'USA',
    pop: 324459463,
  },
  {
    country: 'Indonesia',
    pop: 263991379,
  }
]

let sum3 = data.reduce((acc, val) => {
  return val.country === 'China' ? acc : acc + val.pop;
}, 0);

// filter

let arr = [1,2,3,4,5,6];

let even = arr.filter(val => {
  return val % 2 === 0;
});

let even1 = arr.filter(val => val % 2 === 0);

let countires = data.filter(val => {
  return val.pop > 500000000;
});

let countries1 = data.filter(val => val.pop > 500000000);

let countries2 = data.filter((val) => val.pop > 500000000).reduce((acc, val) => acc + val.pop, 0);


// chaining map, reduce, filter
data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
];