//REDO problem
var words = ["ground", "control", "to", "major", "tom"];

function map(array, actionWhenMapped) {
   var nArray = [];
   for(var i = 0; i < array.length; i++) {
    nArray[i] = actionWhenMapped(array[i]);
   }
   return nArray;
}

 console.log(map(words, function(word) {
   return word.length;
 }));

console.log(map(words, function(word) {
  return word.toUpperCase();
}));

console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}));


