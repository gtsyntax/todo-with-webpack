import { Todo } from "./components/Todo"
import { Project } from "./components/Project"


const p1 = Project("health")
const t1 = Todo(
    1,
    "Workout",
    Date(),
    "Do yoga",
    "high"
)

const t2 = Todo(
    2,
    "Workout",
    Date(),
    "Do yoga",
    "high"
)

p1.addTodo(t1)
p1.addTodo(t2)
console.log(p1.getTodos())
p1.deleteTodos(1)
console.log(p1.getTodos())
