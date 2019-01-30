var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");

//Finding Length of Input
function inputLength() {
	return input.value.length;
}

//Creating List Element and Adding After Click
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

//Striking Through Item When Clicked Om
function underlineParent(event){
	event.target.parentNode.classList.toggle("done");
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function clickThroughListItem(event){
	li.classList.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

input.addEventListener("click", clickThroughListItem);