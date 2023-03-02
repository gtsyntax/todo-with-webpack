const Project = name => {
    let todos = []

    const addTodo = (todo) => {
        todos = [...todos, todo]
    }

    const getTodos = () => todos.map(todo => todo.getTodo())

    const deleteTodos = (id) => todos = todos.filter(todo => todo.getTodo()["id"] !== id)

    return {addTodo, getTodos, deleteTodos}
}

export { Project }