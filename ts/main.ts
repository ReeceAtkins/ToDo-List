
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

    // Load saved item
    loadSavedItems();
}

function loadSavedItems(){
    let itemArray = getToDoItems(); // read from local storage
    for(let i = 0; i < itemArray.length; i++){
        let currItem = itemArray[i]
        displayToDoItem(currItem);
    }
}

function main():void{
    if (isValid()){
        let item = getToDoItem();
        displayToDoItem(item);
        saveToDo(item);
    }
}

/**
 * Check form data is valid
 */
function isValid(): boolean {
    let valid = true;
    // Validate title
    if (this.title.value == ""){
        valid = false;
        let titleSpan = <HTMLElement>document.getElementById("titleSpan");
        titleSpan.innerText = "Enter a title (without numbers)"
    }

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
    let displayDiv;
    let itemDiv = document.createElement("div");

    let itemTitle = document.createElement("h2");
    itemTitle.innerText = item.title;

    let itemDate = document.createElement("p");
    //itemDate.innerText = item.dueDate.toDateString();
    let dueDate = new Date(item.dueDate.toString());
    itemDate.innerText = dueDate.toDateString();

    if (item.isCompleted){
        displayDiv = document.getElementById("displayComplete");
        itemDiv.classList.add("completed");
    }
    else{
        displayDiv = document.getElementById("displayIncomplete");
        itemDiv.classList.add("incomplete");
    }

    // Add onclick to itemDiv
    itemDiv.onclick = toggleClass;

    displayDiv.appendChild(itemDiv);
    // add title
    itemDiv.appendChild(itemTitle);
    // add date
    itemDiv.appendChild(itemDate);
}

function updateToDo(item: ToDoItem):void{
    //let itemString = JSON.stringify(item);
    if (item.isCompleted == true){
        item.isCompleted = false;
    }
    else{
        item.isCompleted = true;
    }
    localStorage.removeItem(todoKey);
    saveToDo(item);
}



/**
 * Switches the class of itemDiv and switches
 * displayDiv to correct one.
 */
function toggleClass():void{
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

// Store ToDoItem in web storage
function saveToDo(item:ToDoItem):void{
    let currItems = getToDoItems();
    if(currItems == null){ // No items found
        currItems = new Array();
    }
    currItems.push(item); // Add the new item to the curr item list

    let currItemsString = JSON.stringify(currItems);
    localStorage.setItem(todoKey, currItemsString);
}
const todoKey = "todo";

/**
 * Get stored ToDo item or return null if
 * none are found
 */
function getToDoItems():ToDoItem[]{
    let itemString = localStorage.getItem(todoKey);
    let item:ToDoItem[] = JSON.parse(itemString);
    return item;
}
