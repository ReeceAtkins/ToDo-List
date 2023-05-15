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
    var displayDiv = document.getElementById("display");
    var itemDiv = document.createElement("div");
    var itemTitle = document.createElement("h2");
    itemTitle.innerText = item.title;
    var itemDate = document.createElement("p");
    itemDate.innerText = item.dueDate.toDateString();
    if (item.isCompleted) {
        itemDiv.innerText = "Completed";
    }
    else {
        itemDiv.innerText = "Not Complete";
    }
    displayDiv.appendChild(itemDiv);
    itemDiv.appendChild(itemTitle);
    itemDiv.appendChild(itemDate);
}
