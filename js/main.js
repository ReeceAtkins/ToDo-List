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
    }
}
function isValid() {
    var valid = true;
    if (!isNaN(this.title)) {
        valid = false;
    }
    if (this.dueDate)
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
}
