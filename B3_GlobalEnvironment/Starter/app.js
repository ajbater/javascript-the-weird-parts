// var a;
// console.log(a);
//
// if (a === undefined) {
//   console.log('a is undefined!')
// } else {
//   console.log('a is defined!')
// }
//
// function b() {
//   var myVar;
//   console.log(myVar);
// }
//
// function a() {
//   var myVar = 2;
//   console.log(myVar);
//   b();
// }
//
// var myVar = 1;
// console.log(myVar);
// a();


function c() {
  function d() {
    console.log(myVar);
  }
  var myVar = 2;
  d();
}

var myVar = 1;
c();
