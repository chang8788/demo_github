var boxElement = document.querySelector('.box');
//them mot element trong 1 element
boxElement.innerHTML = '<h1>Heading node </h1>';
//ghi đè một elemant trên 1 element hiện tại
boxElement.outerHTML = '<h2>New heading</h2>'