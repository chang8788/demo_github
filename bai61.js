var courses = [
  {
    name: 'Javascript',
    coin: 300,
    isFinish: true
  },
  {
    name: 'PHP',
    coin: 500,
    isFinish: false
  },
  {
    name: 'Ruby',
    coin: 200,
    isFinish: false
  }
];
Array.prototype.every2 = function(callback) {
  var output = true;
  for (var index in this) {
    if(this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if(!result) {
        output = false;
        break;
      }
    }
  }
  return output;
};
var resultFinish = courses.every2(function(course, index, array) {
    return course.isFinish;
});
console.log(resultFinish);