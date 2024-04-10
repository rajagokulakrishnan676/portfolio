function addTask(){
    if(taskValue == " "){
        console.log("please add some notes");
    }
}
function addTask() {
    let todoField = document.getElementById("todoField");
    let taskValue = todoField.value.trim();

    if (taskValue !== "") {
        let listItems = document.getElementById("listItems");
        let listItem = document.createElement("li");
        listItem.innerHTML = taskValue + '<button onclick="deleteTask(this)" class="deleteBtn">❌</button>';
        listItems.appendChild(listItem);
        todoField.value = "";
    }
}

function deleteTask(button) {
    button.parentElement.remove();
}

