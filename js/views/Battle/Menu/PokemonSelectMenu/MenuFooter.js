import {closePokemonSelectMenu} from "./index.js"

export default function createMenuFooter(cancelable = true) {
    const footer = document.createElement('div')
    footer.classList.add('pokemon-select-menu__footer')

    footer.innerHTML = `<h2>Choose a Pokémon</h2>`

    if (cancelable) {
        const cancelButton = document.createElement('button')
        cancelButton.classList.add('button--cancel')
        cancelButton.textContent = 'CANCEL'
        cancelButton.onclick = closePokemonSelectMenu
        footer.append(cancelButton)
    }

    return footer
}
