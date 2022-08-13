var boxElement = document.querySelector('.box');

// lấy ra độ dài của class
// console.log(boxElement.classList.length);

// // lấy ra class
// console.log(boxElement.classList[0]);

// //lấy ra value nằm trong class
// console.log(boxElement.classList.value);

//add thêm nhiều class vào element
// boxElement.classList.add('red', 'blue');

// // kiểm tra xem class có nằm trong element k
// console.log(boxElement.classList.contains('red'));
// boxElement.classList.remove('red');


setInterval(() => {
  boxElement.classList.toggle('red');
}, 1000);
