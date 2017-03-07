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
