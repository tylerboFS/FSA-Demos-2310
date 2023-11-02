// Logs the document object
console.log("window.document: ");
console.log(window.document);

// Logs body of document
console.log("document.body: ");
console.log( document.body);

console.log("Children of Document Body: ")
console.log(document.body.children);

console.log("Second child of body: ")
console.log(document.body.children[1]);

console.log("First child of the ul: ")
console.log(document.body.children[1].children[0]);

// Accessing element by id
var firstChildUl = document.getElementById("first-child-ul");

// Setting style of element
firstChildUl.style.color = "#e97451";
