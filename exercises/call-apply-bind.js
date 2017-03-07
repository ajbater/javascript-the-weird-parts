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
