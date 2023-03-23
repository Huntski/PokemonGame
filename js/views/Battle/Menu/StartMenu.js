import {menuSoundEffect} from "../../../music.js"
import {setBattleMenuContent} from "./BattleMenu.js"
import {opponentTurn} from "../TrainerTurns.js"
import {battle, battleStates} from "../../../store/battle.js"

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
        battle.commit(battleStates.FIGHT_MENU)
    }

    itemsButton.onclick = () => {
        menuSoundEffect()
        // battle.commit(battleStates.)
    }

    pokemonButton.onclick = () => {
        menuSoundEffect()
        battle.commit(battleStates.POKEMON_SELECT)
    }

    runButton.onclick = async () => {
        menuSoundEffect()
        await battle.commit(battleStates.MESSAGE, 'You can\'t run from this battle!')
        await opponentTurn()
    }

    setBattleMenuContent(startMenu)

    return startMenu
}
