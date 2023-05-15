
class ToDoItem {
    title:string;
    dueDate:Date;
    isCompleted:boolean

//    constructor(title:string) {
//        this.title = title;
//    }
}
window.onload = function () {
    document.getElementById("add-ToDo").onclick = main;
}

function main():void{
    if (isValid()){
        let item = getToDoItem()
    }
}

/**
 * Check form data is valid
 */
function isValid(): boolean {
    let valid = true;
    if (!isNaN(this.title)){
        valid = false;
    }
    if (this.dueDate)

    return valid;
}

/**
 * Get all input off form and wrap in
 * a ToDoItem object
 */
function getToDoItem():ToDoItem{
    let item = new ToDoItem();

    // Title
    let title = <HTMLInputElement>document.getElementById("title");
    item.title = title.value;

    // dueDate
    let date = <HTMLInputElement>document.getElementById("due-date");
    item.dueDate = new Date(date.value);

    // isCompleted
    let isCompleted = <HTMLInputElement>document.getElementById("is-completed");
    item.isCompleted =  isCompleted.checked;

    return item;
}

/**
 * 
 * @param item Display given ToDoItem on the web page
 */
function displayToDoItem(item: ToDoItem): void {

}
