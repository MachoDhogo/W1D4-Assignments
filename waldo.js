// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(item, position) {
    if (item === "Waldo") {
      found(position);   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log("Found Waldo at Index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



