import {showFightMenu} from "./FightMenu.js"
import {menuSoundEffect} from "../../../music.js"
import {setBattleMenuContent} from "./BattleMenu.js"
import {showPokemonSelectMenu} from "./PokemonSelectMenu.js"
import {showMessageMenu} from "./MessageMenu.js"

export let startMenu = null

export function showStartMenu() {
    startMenu = document.createElement('div')

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
        showFightMenu()
    }

    itemsButton.onclick = () => {
        menuSoundEffect()
        // showPokemonSelectMenu()
    }

    pokemonButton.onclick = () => {
        showPokemonSelectMenu()
    }

    runButton.onclick = () => {
        menuSoundEffect()
        showMessageMenu('You can\'t run from this battle!').then(_ => {
            showStartMenu()
        })
    }

    setBattleMenuContent(startMenu)
}
