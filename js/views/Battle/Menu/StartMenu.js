import {menuSoundEffect} from "../../../music.js"
import {setBattleMenuContent} from "./BattleMenu.js"
import {opponentTurn} from "../TrainerTurns.js"
import {battle} from "../../../store/battle.js"

export async function showStartMenu() {
    const startMenu = document.createElement('div')

    startMenu.classList.add('start-menu')

    startMenu.innerHTML = `
                <div class="main-options__buttons right-menu">
                    <button id="fight">FIGHT</button>
                    <button id="items">ITEMS</button>
                    <button id="pokemon">POKEMON</button>
                    <button id="run">RUN</button>
                </div>`

    const fightButton = startMenu.querySelector('#fight')
    const itemsButton = startMenu.querySelector('#items')
    const pokemonButton = startMenu.querySelector('#pokemon')
    const runButton = startMenu.querySelector('#run')

    fightButton.onclick = () => {
        menuSoundEffect()
        battle.dispatch('fightMenu')
    }

    itemsButton.onclick = () => {
        menuSoundEffect()
    }

    pokemonButton.onclick = () => {
        menuSoundEffect()
        battle.dispatch('pokemonSelectMenu')
    }

    runButton.onclick = async () => {
        menuSoundEffect()
        await battle.dispatch('message', 'You can\'t run from this battle!')
        await opponentTurn()
    }

    setBattleMenuContent(startMenu)

    return startMenu
}
