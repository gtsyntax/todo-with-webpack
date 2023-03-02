const Header = document.createElement("header")
Header.classList.add("header")

// header left section
const headerLeftSection = document.createElement("div")

const userName = document.createElement("h1")
userName.textContent = "Hi John"
headerLeftSection.appendChild(userName)

const headerText = document.createElement("p")
headerText.textContent = "Today you have 12 todos"
headerLeftSection.appendChild(headerText)

Header.appendChild(headerLeftSection)

// header right section
const createTodoBtn = document.createElement("h2")
createTodoBtn.classList.add("create-todo")
createTodoBtn.textContent = "Create Todo"

Header.appendChild(createTodoBtn)

export { Header }