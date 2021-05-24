import {removeAllChildNodes} from './helperFunctions'
import {Inbox} from './data'
function createProject(name){
    var array = [];
    array.name = name;
    return array;
}


function createTask(title, description, dueDate) {
    var task = {
        id: Date.now(),
        title: title,
    description: description,
dueDate: dueDate}
        return task
}


function addTask(projectName, task) {
    projectName.push(task)
}



function addProjectToDOM(projectName) {
    var rightpane = document.querySelector(".right-pane")
    
    //first add name of project in right-pane
    var projectHeading = document.createElement("div")
    projectHeading.setAttribute("id", "project-heading")
    projectHeading.textContent = `${projectName.name}`
    rightpane.appendChild(projectHeading)
    

    //create project-list div to show the elements of the project
    var projectList = document.createElement("div")
    projectList.setAttribute("class", "project-list")

    //add tasks to project-list div
    projectName.forEach(task => {
        var taskDiv = document.createElement("div")
        taskDiv.setAttribute("class", "task-element")
        // taskDiv.textContent = task.title;

        //create button
        var taskButton = document.createElement("input")
        taskButton.setAttribute("type", "radio")
        taskDiv.appendChild(taskButton)


        //create taskTitle
        var taskTitle = document.createElement("div")
        taskTitle.setAttribute("class", "task-title")
        taskTitle.textContent = task.title;
        taskDiv.appendChild(taskTitle);

        //create date picker
        var date = document.createElement("input")
        date.setAttribute("type", "date");
        taskDiv.appendChild(date)

        

        projectList.appendChild(taskDiv)
    });


    //add project-list to right-pane
    rightpane.appendChild(projectList)

}


function addTaskEventHandler(event) {
    
    event.preventDefault()
    //create task
    var taskTitle = this.children[0].value
    var taskDate = this.children[0].value
    var description = "not set YET"
    var task = createTask(taskTitle, description, taskDate)
    
    
    //add task to appropriate Project
    // var projectName = document.querySelector("#project-heading").textContent;

    addTask(Inbox, task);

    //render task lists again
    var rightPane = document.querySelector(".right-pane")
    removeAllChildNodes(rightPane)
    addTaskTabToDOM()
    addProjectToDOM(Inbox)
    
}


function addTaskTabToDOM() {
    var rightPane = document.querySelector(".right-pane")

    var addTaskForm = document.createElement("form")
    addTaskForm.setAttribute("class", "add-task-form")
    


    //add taskTitle input
    var taskTitle = document.createElement("input")
    taskTitle.setAttribute("type", "text")
    taskTitle.setAttribute("name", "task-title")
    taskTitle.setAttribute("placeholder", "add task here")
    addTaskForm.appendChild(taskTitle)

    //add taskDate input
    var taskDate = document.createElement("input")
    taskDate.setAttribute("type", "date")
    taskDate.setAttribute("name", "task-date")
    addTaskForm.appendChild(taskDate)
    
    //add task submit button
    var submitButton = document.createElement("input")
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Submit")
    addTaskForm.appendChild(submitButton)

    addTaskForm.addEventListener('submit', addTaskEventHandler);
    rightPane.appendChild(addTaskForm)
}






export {createTask, addTask, addProjectToDOM, createProject, addTaskTabToDOM}
