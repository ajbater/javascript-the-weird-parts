function mapForEach(array, fn) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(
      fn(array[i])
    )
  };
  return newArray;
};

var array1 = [1, 2, 3];
console.log(array1);

var array2 = mapForEach(array1, function(item) {
  return item * 2;
});

console.log(array2);
