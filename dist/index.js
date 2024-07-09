"use strict";
// Differences between let and const
// Let - allows the variable to be reassigned
// Const - does not allow the variable to be reassigned
// Basic Types
let id = 5;
let company = 'Emerald Coast Web Development';
let isPublished = true;
let x = 'Hello';
const titleStyle = { color: 'black', fontSize: '20px' };
const paragraphStyle = { color: '#666', fontSize: '16px' };
let paragraph_text;
// Arrays, you can set the type of the values which are going to be stored inside the array.
let ids = [1, 2, 3, 4, 5];
ids.push(6);
// Const = a Constant, immutable variable whose value cannot be changed
const title = window.document.getElementById('title'); // Selects the element with an ID of 'title'
const initialParagraph = window.document.getElementById('paragraph_text'); // Selects the element with an ID of 'age'
const output = window.document.querySelector('.output'); // Selects the element with a class of 'output'
// Sets a default value for unpublished message. This message will be displayed if the isPublished variable is false
const unpublishedMessage = 'This information is not public.';
// Title Styling Assignments
title.style.color = titleStyle.color;
title.style.fontSize = titleStyle.fontSize;
title.style.paddingTop = '0px';
title.style.marginTop = '0px';
// Initial Paragraph Styling Assignments
initialParagraph.style.color = paragraphStyle.color;
initialParagraph.style.fontSize = paragraphStyle.fontSize;
initialParagraph.style.paddingTop = '5px';
initialParagraph.style.marginTop = '5px';
if (isPublished) {
    // Set the value of #paragraph_text, if our isPublished truthy value
    paragraph_text = 'My paragraph text is published. You can view this if this isPublished is true';
    // Manipulate the DOM with TypeScript Output
    title.innerHTML = company;
    // Set the appropriate innerHTML content for initialParagraph selected element
    initialParagraph.innerHTML = paragraph_text;
}
else {
    // Set the value of #paragraph_text, if our isPublished falsey value
    paragraph_text = 'My paragraph text is NOT published. You cannot view the unpublished information.';
    // Since not published, set the value of the company variable to the value of the unpublishedMessage variable
    company = unpublishedMessage;
    // Manipulate the DOM with TypeScript if isPublished is false
    title.innerHTML = company;
    // Set the appropriate ageContent text
    initialParagraph.innerHTML = paragraph_text;
}
