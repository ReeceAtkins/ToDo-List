var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
window.onload = function () {
    document.getElementById("add-ToDo").onclick = main;
    loadSavedItem();
};
function loadSavedItem() {
    var item = getToDo();
    displayToDoItem(item);
}
function main() {
    if (isValid()) {
        var item = getToDoItem();
        displayToDoItem(item);
        saveToDo(item);
    }
}
function isValid() {
    var valid = true;
    if (this.title.value == "") {
        valid = false;
        var titleSpan = document.getElementById("titleSpan");
        titleSpan.innerText = "Enter a title (without numbers)";
    }
    return valid;
}
function getToDoItem() {
    var item = new ToDoItem();
    var title = document.getElementById("title");
    item.title = title.value;
    var date = document.getElementById("due-date");
    item.dueDate = new Date(date.value);
    var isCompleted = document.getElementById("is-completed");
    item.isCompleted = isCompleted.checked;
    return item;
}
function displayToDoItem(item) {
    var displayDiv;
    var itemDiv = document.createElement("div");
    var itemTitle = document.createElement("h2");
    itemTitle.innerText = item.title;
    var itemDate = document.createElement("p");
    var dueDate = new Date(item.dueDate.toString());
    itemDate.innerText = dueDate.toDateString();
    if (item.isCompleted) {
        displayDiv = document.getElementById("displayComplete");
        itemDiv.classList.add("completed");
    }
    else {
        displayDiv = document.getElementById("displayIncomplete");
        itemDiv.classList.add("incomplete");
    }
    itemDiv.onclick = switchClass;
    displayDiv.appendChild(itemDiv);
    itemDiv.appendChild(itemTitle);
    itemDiv.appendChild(itemDate);
}
function updateToDo(item) {
    if (item.isCompleted == true) {
        item.isCompleted = false;
    }
    else {
        item.isCompleted = true;
    }
    localStorage.removeItem(todoKey);
    saveToDo(item);
}
function switchClass() {
    var displayDiv;
    var itemDiv = this;
    if (itemDiv.classList.contains("incomplete")) {
        itemDiv.classList.remove("incomplete");
        itemDiv.classList.add("completed");
        displayDiv = document.getElementById("displayComplete");
    }
    else if (itemDiv.classList.contains("completed")) {
        itemDiv.classList.remove("completed");
        itemDiv.classList.add("incomplete");
        displayDiv = document.getElementById("displayIncomplete");
    }
    itemDiv.remove();
    displayDiv.appendChild(itemDiv);
}
function saveToDo(item) {
    var itemString = JSON.stringify(item);
    localStorage.setItem(todoKey, itemString);
}
var todoKey = "todo";
function getToDo() {
    var itemString = localStorage.getItem(todoKey);
    var item = JSON.parse(itemString);
    return item;
}
