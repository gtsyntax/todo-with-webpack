import { Header } from "./components/Header"
import { Container } from "./components/Container"
import { CardItem } from "./components/CardItem"

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


app.appendChild(Header)
app.appendChild(dashboard.createContainer())
app.appendChild(projects.createContainer())