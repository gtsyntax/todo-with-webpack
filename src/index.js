import { Header } from "./components/Header"
import { Container } from "./components/Container"
import { CardItem } from "./components/CardItem"
import { TodoList } from "./components/TodoList"

import { Todo } from "./components/Todo"
import { Project } from "./components/Project"

import "./index.css"

const app = document.querySelector("#content")

const todosCreated = CardItem(16, "todos created")
const todosLeft = CardItem(12, "todos left")

const dashboard = Container(
    [
        todosCreated.createCardItem(),
        todosLeft.createCardItem()
    ]
)

const workProject = CardItem("Work", "7 todos")
const personalProject = CardItem("Personal", "1 todos")
const shoppingProject = CardItem("Shopping", "2 todos")
const healthProject = CardItem("Health", "2 todos")

const projects = Container(
    [
        workProject.createCardItem(),
        personalProject.createCardItem(),
        shoppingProject.createCardItem(),
        healthProject.createCardItem()
    ]
)

const todos = [
    {
        "id": 1,
        "title": "Workout",
        "dueDate": Date(),
        "description": "Do yoga",
        "priority": "High"

    },
    {
        "id": 2,
        "title": "Lunch",
        "dueDate": Date(),
        "description": "Buy salad",
        "priority": "High"

    },
]

const todoList = TodoList(todos)


app.appendChild(Header)
app.appendChild(dashboard.createContainer())
app.appendChild(projects.createContainer())
app.appendChild(todoList.createList())