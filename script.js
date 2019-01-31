var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");
var ele = document.getElementsByClassName("listelement");

var ul1 = document.getElementById("list");
var li1 = document.createElement("li");





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
li1.appendChild(document.createTextNode("Four"));
var button = document.createElement("button");
button.innerHTML = "Delete";
li1.appendChild(button);
li1.setAttribute("id","element4");
ul1.appendChild(li1);


//
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