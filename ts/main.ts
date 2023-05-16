
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
        let item = getToDoItem();
        displayToDoItem(item);
    }
}

/**
 * Check form data is valid
 */
function isValid(): boolean {
    //let valid = true;
    //if (!isNaN(this.title)){
    //    valid = false;
    //}
    //if (this.dueDate)

    return true;
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
    let displayDiv;
    let itemDiv = document.createElement("div");

    let itemTitle = document.createElement("h2");
    itemTitle.innerText = item.title;

    let itemDate = document.createElement("p");
    itemDate.innerText = item.dueDate.toDateString();

    if (item.isCompleted){
        displayDiv = document.getElementById("displayComplete");
        //itemDiv.innerText = "Completed";
        itemDiv.classList.add("completed");
    }
    else{
        displayDiv = document.getElementById("displayIncomplete");
        //itemDiv.innerText = "Not Complete";
        itemDiv.classList.add("incomplete");
    }

    // Add onclick to itemDiv
    itemDiv.onclick = switchClass;

    displayDiv.appendChild(itemDiv);
    // add title
    itemDiv.appendChild(itemTitle);
    // add date
    itemDiv.appendChild(itemDate);
}



/**
 * Switches the class of itemDiv and switches
 * displayDiv to correct one.
 */
function switchClass():void{
    let displayDiv;
    let itemDiv = <HTMLDivElement>this;
    if (itemDiv.classList.contains("incomplete")){
        itemDiv.classList.remove("incomplete");
        itemDiv.classList.add("completed");
        displayDiv = document.getElementById("displayComplete");
    }
    else if (itemDiv.classList.contains("completed")){
        itemDiv.classList.remove("completed");
        itemDiv.classList.add("incomplete");
        displayDiv = document.getElementById("displayIncomplete");
    }

    // remove div
    itemDiv.remove();

    // append
    displayDiv.appendChild(itemDiv);
}
