//need to redo this!!

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    var num = 0;

   return function() {
    return list[num++];
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

var countdownGenerator = function (x) {
    var cd = x

  return function() {
    if(cd > 0){
      console.log("T-minus " + cd + "...")
    }
    else if(cd === 0) {
      console.log("Blast Off!")
    }
    else if(cd < 0) {
      console.log("Rockets already gone, bub!")
    }
    cd -= 1;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!

