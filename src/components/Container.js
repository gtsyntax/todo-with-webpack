const Container = (items) => {

    const createContainer = () => {
        const container = document.createElement("section")
        container.classList.add("container")
        buildContainer(container)
        return container
    }

    const buildContainer = (container) => {
        items.forEach(item => container.appendChild(item))
    }

    return {createContainer}
}

export { Container }