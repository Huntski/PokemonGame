import {gameCanvas} from "../../../../script.js"
import {menuSoundEffect} from "../../../../music.js"
import createMenuFooter from "./MenuFooter.js"
import createPokemonOption from "./PokemonMenuOption.js"

let pokemonSelectMenu = null

export default function showPokemonSelectMenu(cancelable = true) {
    pokemonSelectMenu = document.createElement('div')

    pokemonSelectMenu.classList.add('pokemon-select-menu')

    pokemonSelectMenu.innerHTML = `
        <div class="pokemon-options"></div>`

    const pokemonOptions = pokemonSelectMenu.querySelector('.pokemon-options')

    player.getters['getPlayer'].currentlyHolding.forEach(pokemon => {
        pokemonOptions.append(createPokemonOption(pokemon))
    })

    gameCanvas.append(pokemonSelectMenu)

    pokemonSelectMenu.append(createMenuFooter(cancelable))

    return pokemonSelectMenu
}

export function closePokemonSelectMenu() {
    menuSoundEffect()
    gameCanvas.removeChild(pokemonSelectMenu)
}


