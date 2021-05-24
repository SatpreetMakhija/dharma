import {createProject, createTask, addTask} from './addTask'

var Inbox = createProject("Inbox")
var task = createTask("do laundry", "by today", "10/10/21")
addTask(Inbox, task)
export { Inbox }