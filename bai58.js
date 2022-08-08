var courses = [
  'Javascript',
  'PHP',
  'Ruby'
];
// Neu dung ham forEach da duoc dinh nghia
// courses.forEach(function(course, index, array) {
// console.log(course, index, array);
// })
//Neu dung ham forEach2 chua duoc dinh nghia thi dinh nghia nhu sau
Array.prototype.forEach2 = function(callback) {
  for (var index in this) {
    if(this.hasOwnProperty(index)) {
      callback(this[index], index, this);
    }
  }

}
courses.forEach2(function(course, index, array) {
  console.log(course, index, array);
})
