import {changeHealthBarColor} from "../../StatusCard/PokemonStatus.js"
import {playerChangePokemon} from "../../BattleEvents.js"
import {opponentTurn} from "../../TrainerTurns.js"
import {player} from "../../../../store/player.js"
import {closePokemonSelectMenu} from "./PokemonSelectMenu.js"

export default function createPokemonOption(pokemon, cancelable = true) {
    const option = document.createElement('div')
    option.classList.add('pokemon-option')
    if (pokemon.fainted) {
        option.classList.add('fainted')
    } else if (pokemon.id === player.getters['getPokemon'].id) {
        option.classList.add('active')
    }

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

    healthBar.style.width = `${pokemon.healthPercentage}%`

    changeHealthBarColor(healthBar, pokemon.healthPercentage)

    option.onclick = () => {
        closePokemonSelectMenu()
        playerChangePokemon(pokemon).then(async _ => {
            if (cancelable) await opponentTurn()
        })
    }

    return option
}

