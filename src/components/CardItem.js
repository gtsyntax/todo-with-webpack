const CardItem = (value, text) => {
    const createCardItem = () => {
        const item = document.createElement("div")
        item.classList.add("card-item")

        const itemHeader = document.createElement("h3")
        itemHeader.textContent = value
        item.appendChild(itemHeader)

        const itemText = document.createElement("p")
        itemText.textContent = text
        item.appendChild(itemText)

        return item
    }

    return {createCardItem}
}

export {CardItem}