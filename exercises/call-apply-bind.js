var person = {
  firstname: 'Amanda',
  lastname: 'Bater',
  getFullName: function() {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
}

var logName = function(lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
}

// logPersonName is a copy of logName, and it has been bound to person, so whenever logPersonName is called it knows that 'this' is referring to 'person'
var logPersonName = logName.bind(person);

logPersonName();

logName.call(person);
logName.apply(person);

var person2 = {
  firstname: 'Someone',
  lastname: 'Else'
}

// Here I have taken the functions from the 'person' object and am able to apply them to the 'person2' object as they have the same property names
console.log(person.getFullName.apply(person2));


// Bind

function multiply(a, b) {
  return a * b;
}

// Using bind to create two new functions from the multiply function
// This is called currying
// Currying is creating a copy of a function, but with some preset parameters

// The first parameter will now always be 2
var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(6));

var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(2));
