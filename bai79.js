
var btn = document.getElementById('btn');
// sau 3s mới thực hiện các công việc

// setTimeout(function () {
//   btn.onclick = function(e) {
//     console.log('Viec 1');
//     console.log('Viec 2');
//    alert('Viec 3');
// }
// }, 3000);

// thực hiện các công việc sau 3s thì dừng lắng nghe
// btn.onclick = function(e) {
//   console.log('Viec 1');
//   console.log('Viec 2');
//  alert('Viec 3');
// };
// setTimeout(function() {
//   btn.onclick = function() {
//   }

// }, 3000);

//thực hiện event listen
function viec1() {
  console.log('Viec1');
};
btn.addEventListener('click', viec1);

// huy lang nghe
setTimeout(function () {
  btn.removeEventListener('click', viec1)
}, 3000);