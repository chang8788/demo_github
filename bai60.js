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
Array.prototype.some2 = function(callback) {
  for(var index in this) {
   if(this.hasOwnProperty(index)) {
    if(callback(this[index], index, this)) {
      return true;
    };
   }
  }
  return false;

};

var result = courses.some2(function(course, index, Array) {
    return course.isFinish;
});
console.log(result);