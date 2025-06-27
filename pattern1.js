const obj = [
  { name: 'abc', age: 17 },
  { name: 'def', age: 56 },
  { name: 'ghi', age: 25 },
  { name: 'jkl', age: 18 }
];
const a = obj.filter(item => item.age > 18);
console.log(a);

