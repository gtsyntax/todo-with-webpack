const Todo = (id, title, dueDate, description, priority) => {
    const getTodo = () => {
        return {id, title, dueDate, priority, description}
    }

    return {getTodo}
}

export {Todo}