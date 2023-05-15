var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
window.onload = function () {
    document.getElementById("add-ToDo").onclick = main;
};
function main() {
    if (isValid()) {
        var item = getToDoItem();
        displayToDoItem(item);
    }
}
function isValid() {
    return true;
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
    itemDate.innerText = item.dueDate.toDateString();
    if (item.isCompleted) {
        displayDiv = document.getElementById("displayComplete");
        itemDiv.classList.add("completed");
    }
    else {
        displayDiv = document.getElementById("displayIncomplete");
        itemDiv.classList.add("incomplete");
    }
    displayDiv.appendChild(itemDiv);
    itemDiv.appendChild(itemTitle);
    itemDiv.appendChild(itemDate);
}
