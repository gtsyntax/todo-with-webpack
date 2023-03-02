const TodoList = todos => {
    const createList = () => {
        const container = document.createElement("section")
        container.classList.add("todo-list-container")
        buildList(container)
        return container
    }

    const buildList = listArea => {
        todos.map(todo => {
            const wrapper = document.createElement("div")
            wrapper.classList.add("todo-item")
            
            const header = document.createElement("h3")
            header.textContent = todo.title
            wrapper.appendChild(header)

            const description = document.createElement("p")
            description.textContent = todo.description
            wrapper.appendChild(description)

            const dueDate = document.createElement("p")
            dueDate.textContent = todo.dueDate
            wrapper.appendChild(dueDate)

            listArea.appendChild(wrapper)
        })
    }

    return { createList }
}

export { TodoList }