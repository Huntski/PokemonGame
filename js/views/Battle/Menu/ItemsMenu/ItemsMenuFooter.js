import {closeItemsMenu} from "./ItemsMenu.js"

export default function createItemsMenuFooter() {
    const footer = document.createElement('div')
    footer.classList.add('popup-menu__footer')

    footer.innerHTML = `<h2>Choose a item</h2>`

    const cancelButton = document.createElement('button')
    cancelButton.classList.add('button--cancel')
    cancelButton.textContent = 'CANCEL'
    cancelButton.onclick = closeItemsMenu
    footer.append(cancelButton)

    return footer
}
