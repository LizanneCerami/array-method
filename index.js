const fruit = [
  "apple",
  "pineapple",
  "banana",
  "dragon",
  "strawberry",
  "mango",
  "kenep"
];

// console.log('original array', fruit);
// console.log('sorted', fruit.sort());
// console.log('current array', fruit);


const age =[
13,
17,
55,
45,
31,
23,
21,
30
]

const ageFilter = age.filter(function(age) {
  return age > 18;
});

console.log("Age Filter", ageFilter);

const ageFilter2 = age.filter((age) => {
  return age > 30;
});

console.log("Age Filter > 30", ageFilter2);

const ageFind = age.find( function(age){
  return age > 18;
});

console.log("Age Find", ageFind);

const ageFind2 = age.find((age) => {
  return age > 18;
})

console.log("Age Find 2", ageFind2);

const ageSome = age.some(function (age) {
  return age > 18;
})

console.log("age some", ageSome);

const ageSome2 = age.some((age) => {
  return age > 18;
});

console.log("age some2", ageSome2);

const ageEvery = age.every( function(age) {
  return age > 0;
})

console.log("age ever", ageEvery);

const ageEvery2 = age.every((age) => {
  return age > 30;
})

console.log("age every2", ageEvery2);
