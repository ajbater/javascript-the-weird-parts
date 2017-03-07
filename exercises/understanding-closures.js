function greet(whattosay) {
  return function(name) {
    console.log(whattosay + ' ' + name);
  }
}
greet('Hi')('Amanda');

function greetSomeone(greeting) {
  return function(name) {
    console.log(greeting + ' ' + name);
  }
}
var greetMe = greetSomeone('Hello');
greetMe('Amanda');

function buildFunctions() {
  var arr =[]
  for (var i = 0; i < 3; i++) {
    arr.push(
      function() {
        console.log(i);
      }
    )
  }
  return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();
