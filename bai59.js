var courses = [
  {
    name: 'Ruby',
    coin: 300
  },
  {
    name: 'Javascript',
    coin: 400
  },
  {
    name: 'PHP',
    coin: 500
  }
];
Array.prototype.filter2 = function(callback) {
  var output = [];
  for (var index in this) {
    if(this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if(result) {
        output.push(this[index])
      }
    }

  }
  return output;
}
var filterCoin = courses.filter2(function(course, index, array) {
  return course.coin > 350;
});
console.log(filterCoin);
