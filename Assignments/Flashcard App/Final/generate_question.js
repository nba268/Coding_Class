let currentQuestion = 4;
let numOfQuestions = activeQuestions.length;

// Set the header text
let headerText = `Question ${currentQuestion} of ${numOfQuestions}`;
let headerElement = document.querySelector("#currentQuestionHeader");
headerElement.innerHTML = headerText;

// Get question data from the data.js file
let currentQuestionData = activeQuestions[currentQuestion-1];

// Set the question text in the HTML
let questionText = currentQuestionData.question;
let questionTextElement = document.querySelector("#questionText");
questionTextElement.innerHTML = questionText;

// Set the <li> items with the question answers from the data.js file
let listItemsElement = document.querySelector("#listItems");

let answersArray = currentQuestionData.response;
for (i = 0; i < answersArray.length; i++) {
	const liElement = document.createElement("li");
	const labelElement = document.createElement("label");
	const inputElement = document.createElement("input");

	liElement.appendChild(labelElement);
	labelElement.appendChild(inputElement);

	inputElement.type = "radio";
	inputElement.name = "options";

	listItemsElement.appendChild(liElement);

	const textElement = document.createTextNode(answersArray[i]);
	labelElement.appendChild(textElement);
}

// Add dots
let progressDotsElement = document.querySelector("#progressDots");
for (i = 0 ; i < numOfQuestions ; i++) {
	const divElement = document.createElement("div");
	progressDotsElement.appendChild(divElement);
}
