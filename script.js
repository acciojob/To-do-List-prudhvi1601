var input = document.getElementById("newTodoInput");
var btn = document.getElementById("addTodoBtn");
var ol = document.getElementById("todoList");

function todoList(a) {
	 if(input.value){
		 var li = document.createElement("li");
		 li.textContent = input.value;
		 ol.appendChild(li)
		 input.value = "";
	 }
}
btn.addEventListener("click",todoList)