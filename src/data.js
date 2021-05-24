import {createProject, createTask, addTask} from './addTask'

var Data = {}

createProject("Inbox")
var task = createTask("do laundry", "by today", "2021/03/04")
addTask("Inbox", task)
export { Data }