var headingNode = 
    document.querySelector('h1');

// lấy text node trong element    
// console.log(headingNode.innerText);
// console.log(headingNode.textContent);

// // sửa text node trong element
// headingNode.innerText = 'new text';
// console.log(headingNode.textContent);
// headingNode.textContent = 'new text 2';
// console.log(headingNode.textContent);

// console.log(headingNode.innerText);
// console.log(headingNode.textContent);

//seter vơi inner text
headingNode.innerText = `

Heading text

`;
headingNode.textContent = `

Heading text

`;
