import {gameCanvas, player} from "../../../script.js"
import {changeHealthBarColor} from "../StatusCard/PokemonStatus.js"

let pokemonSelectMenu = null

export function showPokemonSelectMenu() {
    pokemonSelectMenu = document.createElement('div')

    pokemonSelectMenu.classList.add('pokemon-select-menu')

    pokemonSelectMenu.innerHTML = `
        <div class="pokemon-options"></div>

        <div class="pokemon-select-menu__footer">
            <h2>Choose a Pokémon</h2>
            
            <button class="button--cancel">CANCEL</button>
        </div>`

    const pokemonOptions = pokemonSelectMenu.querySelector('.pokemon-options')

    player.currentlyHolding.forEach(pokemon => {
        pokemonOptions.append(createPokemonOption(pokemon))
    })

    const cancelButton = pokemonSelectMenu.querySelector('.button--cancel')
    cancelButton.onclick = closePokemonSelectMenu

    gameCanvas.append(pokemonSelectMenu)
}

function closePokemonSelectMenu() {
    gameCanvas.removeChild(pokemonSelectMenu)
}

function createPokemonOption(pokemon) {
    const option = document.createElement('div')
    option.classList.add('pokemon-option')
    option.innerHTML = `
        <div class="pokemon-option__image">
            <img src="${pokemon.characterFromFront}" alt="Small image of ${pokemon.name}.">   
        </div>

        <div class="pokemon-option__info">
            <div class="pokemon-option__name">
                <h2>${pokemon.name}</h2>
                <span>lvl ${pokemon.level}</span>
            </div>
    
            <div class="pokemon-option__health">
                <span>HP:</span>
                <div class="health-bar">
                    <div class="current-health"></div>
                </div>
            </div>
            
            <span class="health-indicator">${pokemon.currentHealth}/${pokemon.health}</span>
        </div>`

    const healthBar = option.querySelector('.current-health')

    changeHealthBarColor(healthBar, pokemon.currentHealth)

    return option
}
