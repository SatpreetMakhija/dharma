import {createTask, addTask, addProjectToDOM, createProject, addTaskTabToDOM} from './addTask'
import {Data} from './data'
addTaskTabToDOM()

// var inbox = createProject("Inbox")
// var task = createTask("do laundry", "by today", "10/10/21")
// console.log(task)
// addTask(inbox, task)
// console.log(inbox)
console.log(Data)
addProjectToDOM(Data["Inbox"])
