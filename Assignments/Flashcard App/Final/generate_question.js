let currentQuestionIndex = 0;
let numOfQuestions = activeQuestions.length;

//get id of check answer
const check_btn = document.querySelector("#check_answer");

// Set the <li> items with the question answers from the data.js file
let listItemsElement = document.querySelector("#listItems");

//header
let headerElement = document.querySelector("#currentQuestionHeader");

// question text
let questionText = document.querySelector("#questionText");

let answersArray = "";

function updateHeader(){
    headerElement.innerHTML = `Question ${currentQuestionIndex + 1} of ${activeQuestions.length}`;
}

function createQuestion(index){
	listItemsElement.innerHTML = "";
	// Get question data from the data.js file
	let currentQuestionData = activeQuestions[index];

	// Set the header text
	updateHeader();

	// Set the question text in the HTML
	questionText.innerHTML = currentQuestionData.question;

	answersArray = currentQuestionData.response;
	for (i = 0; i < answersArray.length; i++) {
		const liElement = document.createElement("li");
		const labelElement = document.createElement("label");
		const inputElement = document.createElement("input");

		liElement.appendChild(labelElement);
		labelElement.appendChild(inputElement);

		inputElement.type = "radio";
		inputElement.name = "option";
		inputElement.setAttribute("value", i);

		listItemsElement.appendChild(liElement);

		inputElement.addEventListener("change", (event) => {
	        check_btn.removeAttribute("disabled");
	    });


		const textElement = document.createTextNode(answersArray[i].text);
		labelElement.appendChild(textElement);
	}
}

createQuestion(currentQuestionIndex);

// Check answers button
check_btn.addEventListener("click", ()=>{
    let selectedIndex = document.querySelector("input[name='option']:checked").value;
    if(answersArray[selectedIndex].isCorrect){
        document.querySelector("#feedbackContainer").classList.remove("hide");
        document.querySelector("#navQuestions").classList.remove("hide");
        document.querySelector("#check_answer").classList.add("hide");
    }else{
        alert("wrong")
    }
});

// Next button
const next_btn = document.querySelector("#next_btn");
next_btn.addEventListener("click", () => {
    if(currentQuestionIndex < (activeQuestions.length-1)){
        console.log(activeQuestions[currentQuestionIndex]);
        currentQuestionIndex += 1;
        createQuestion(currentQuestionIndex);
        document.querySelector("#feedbackContainer").classList.add("hide");
        document.querySelector("#navQuestions").classList.add("hide");
        document.querySelector("#check_answer").classList.remove("hide");
        check_btn.setAttribute("disabled", true);
    }else{
        alert("End of quiz!");
        next_btn.setAttribute("disabled", true);
    }
    
})

// Add dots
let progressDotsElement = document.querySelector("#progressDots");
for (i = 0 ; i < numOfQuestions ; i++) {
	const divElement = document.createElement("div");
	progressDotsElement.appendChild(divElement);
}
