import {menuSoundEffect} from "../../../../music.js"
import {closeItemsMenu} from "./ItemsMenu.js"

export function createItemOption(item) {
    const option = document.createElement('button')
    option.classList.add('item')
    option.textContent = `${item.amount} ${item.name}`

    option.onclick = async () => {
        menuSoundEffect()
        closeItemsMenu()
        await item.useItem()
    }

    return option
}
