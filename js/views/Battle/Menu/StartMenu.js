import {battleMenu} from "../Battle.js"
import {showFightMenu} from "./FightMenu.js"

export let startMenu = null

export function showStartMenu() {
    battleMenu.innerHTML = ''

    startMenu = document.createElement('div')

    startMenu.classList.add('start-menu')

    startMenu.innerHTML = `
                <div class="main-options__buttons right-menu">
                    <button id="fight-button">FIGHT</button>
                    <button id="items-button">ITEMS</button>
                    <button id="pokemon-button">POKEMON</button>
                    <button id="run-button">RUN</button>
                </div>`

    const fightButton = startMenu.querySelector('#fight-button')

    fightButton.onclick = () => {
        showFightMenu()
    }

    battleMenu.append(startMenu)
}
