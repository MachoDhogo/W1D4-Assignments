
// map function is run on an array always
// Asked for help from Don.  He explained that map function always runs on arrays.
// Can access the object using the input.x method.

var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(number) {
  return (Math.sqrt(Math.pow(number.x,2) + Math.pow(number.y,2)))
});
console.log(result)
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);