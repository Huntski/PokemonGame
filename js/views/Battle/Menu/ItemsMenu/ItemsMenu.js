import {gameCanvas} from "../../../../script.js"
import {menuSoundEffect} from "../../../../music.js"
import createItemsMenuFooter from "./ItemsMenuFooter.js"
import {player} from "../../../../store/player.js"
import {createItemOption} from "./ItemOption.js"

let itemsMenu = null

export default function showItemsMenu(cancelable = true) {
    itemsMenu = document.createElement('div')

    itemsMenu.classList.add('items-select-menu', 'popup-menu')

    itemsMenu.innerHTML = `<div class="item-options"></div>`

    const itemOptions = itemsMenu.querySelector('.item-options')

    const items = player.getters['getItems']
    console.log(items)

    items.forEach(item => {
        if (item.amount > 0) itemOptions.append(createItemOption(item))
    })

    gameCanvas.append(itemsMenu)

    itemsMenu.append(createItemsMenuFooter(cancelable))

    return itemsMenu
}

export function closeItemsMenu() {
    menuSoundEffect()
    gameCanvas.removeChild(itemsMenu)
}
