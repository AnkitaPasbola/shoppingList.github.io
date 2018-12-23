var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var dlt= document.getElementsByClassName("delete")
var items = document.querySelectorAll("li");

for (var i=0; i<dlt.length; i++){
dlt[i].addEventListener("click", removeParent);
}


function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent);
  evt.target.parentNode.remove();
}
//set the function to the pre-exixting items.
for (var i=0; i<items.length; i++){
	items[i].addEventListener("click", alterStatus);
}
//add or remove class
function alterStatus(){
	this.classList.toggle("done");
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn=document.createElement("button");
	btn.innerHTML="Delete";
	btn.onclick=removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML=li.innerHTML + " "
	li.appendChild(btn);
    ul.appendChild(li);

   //add the function in your items
   li.addEventListener("click", alterStatus);

	input.value = "";
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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);