var a;
console.log(a);

if (a === undefined) {
  console.log('a is undefined!')
} else {
  console.log('a is defined!')
}

function b() {
  var myVar;
  console.log(myVar);
}

function a() {
  var myVar = 2;
  console.log(myVar);
  b();
}

var myVar = 1;
console.log(myVar);
a();


function c() {
  function d() {
    console.log(myVar);
  }
  var myVar = 2;
  d();
}

var myVar = 1;
c();

// Handling Asynchronicity

// This takes three seconds to execute
function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms){}
  console.log('finished function');
}

// This will only be run when the execution stack is empty, even if the click event has already happened.
// The event queue will not be looked at until then.
function clickHandler() {
  console.log('click event!');
}

document.addEventListener('click', clickHandler);

// This will be executed first
waitThreeSeconds();
// This will be executed second
console.log('finished execution');
