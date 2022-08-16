
// // lấy ra value của input
// var inElement =  document.querySelector('input[type="text"]');
// inElement.onchange = function(e) {
//   console.log(e.target.value);
// };

// //kiểm tra giá trị ô checkbox
// var checkboxElement =  document.querySelector('input[type="checkbox"]');
// checkboxElement.onchange = function(e) {
//   console.log(e.target.checked);
// };

// // lấy ra thuộc tính option
// var selectElement =  document.querySelector('select');
// selectElement.onchange = function(e) {
//   console.log(e.target.value);
// };
document.onkeydown = function(e) {
  switch(e.which) {
    case 78:
      console.log('Chữ N');
      break;
  
     case 65:
      console.log('chữ A');
      break;

    }

  

}