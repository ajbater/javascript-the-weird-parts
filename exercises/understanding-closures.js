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

// All of these will return 3, because they were all created in the same place, so it looks for i in the same spot in memory
// It can only tell you what is in memory now, not what was in memory at the time they were created. Only what is in memory at the time when they are invoked
fs[0]();
fs[1]();
fs[2]();



function buildFunctions2() {
  var arr =[]
  for (var i = 0; i < 3; i++) {
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        }
      })(i)
    )
  }
  return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();


function makeGreeting(language) {
  return function(firstname, lastname) {
    if (language === 'en') {
      console.log('Hello ' + firstname + ' ' + lastname);
    }
    if (language === 'fr') {
      console.log('Bonjour ' + firstname + ' ' + lastname);
    }
  }
}

var greetEnglish = makeGreeting('en');
var greetFrench = makeGreeting('fr');

greetEnglish('Amanda', 'Bater');
greetFrench('Amanda', 'Bater');
