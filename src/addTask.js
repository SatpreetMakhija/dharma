import {removeAllChildNodes} from './helperFunctions'
import {Data} from './data'

function createProject(name){
    Data[name] = {"tasklist": {}};
    Data[name].projectName = name;

    
}


function createTask(title, description, date) {
    var task = {
        id: Date.now(),
        title: title,
    description: description,
date: date}
        return task
}


function addTask(projectName, task) {
    Data[projectName]["tasklist"][task.title] = task
}



function addProjectToDOM(projectName) {
    var rightpane = document.querySelector(".right-pane")
    console.log(projectName.projectName)
    //first add name of project in right-pane
    var projectHeading = document.createElement("div")
    projectHeading.setAttribute("id", "project-heading")
    projectHeading.textContent = `${projectName.projectName}`
    rightpane.appendChild(projectHeading)
    

    //create project-list div to show the elements of the project
    var projectList = document.createElement("div")
    projectList.setAttribute("class", "project-list")


    // create tasklist
    for (const [key, task] of Object.entries(Data[projectName.projectName].tasklist)){
        var taskDiv = document.createElement("div")
        taskDiv.setAttribute("class", "task-element");
        
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
        date.setAttribute("value", `${task.date}`)
        taskDiv.appendChild(date)
        
            projectList.appendChild(taskDiv)



    }




    //add project-list to right-pane
    rightpane.appendChild(projectList)
    console.log(Data["Inbox"])

}


function addTaskEventHandler(event) {
    
    event.preventDefault()
    //create task
    var taskTitle = this.children[0].value
    var taskDate = this.children[1].value
    var description = "not set YET"
    var task = createTask(taskTitle, description, taskDate)
    
    
    
    //add task to appropriate Project
    var projectName = document.querySelector("#project-heading").textContent;

    addTask(projectName, task);
    console.log(Data)

    //render task lists again
    var rightPane = document.querySelector(".right-pane")
    removeAllChildNodes(rightPane)
    addTaskTabToDOM()
    addProjectToDOM(Data[projectName])
    
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
