// var array = [10, 2, 5, 1, 9];

// array.sort(function(a , b){
//   return a - b
// })

// console.log(array)

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 },
];


students.sort(function(a, b) {

//   if (a is before b because of name) {
//     return -1;
//   } else if (a is after b before of name) {
//     return 1;
//   } else if (a is before b becuase of age) {
//     return -1;
//   } else if (a is after b because of age) {
//     return 1;
//   } else {
//     return 0;
//   }
//
  if(a.name < b.name) {
    return -1;
  }
  else if(a.name > b.name) {
    return 1;
  }
  else if(a.age > b.age) {
    return -1
  }
  else if(a.age < b.age) {
    return 1
  }
  else {
    return 0;
  }

});
console.log(students)


// function studentName() {
//   var emptyArray = []
//   for(var namesLoop in students) {
//     var namesAll = students[namesLoop].name + students[namesLoop].age
//     emptyArray.push(namesAll)
//   }
//   return emptyArray.sort()
// }

// console.log(studentName())



