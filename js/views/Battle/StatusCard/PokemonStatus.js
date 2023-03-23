import {opponentStatus, playerStatus} from "../BattleSequence.js"
import {sleep} from "../../../script.js"
import {opponent} from "../../../store/opponent.js"
import {player} from "../../../store/player.js"

export let playerHealthBar = null
export let opponentHealthBar = null

export function showPlayerPokemonStatus() {
    playerHealthBar = createPokemonStatusCard(player.getters['getPokemon'], playerStatus)
}

export function showOpponentPokemonStatus() {
    opponentHealthBar = createPokemonStatusCard(opponent.getters['getPokemon'], opponentStatus)
}

export function resetPlayerPokemonStatus() {
    playerStatus.innerHTML = ''
}

export function resetOpponentPokemonStatus() {
    opponentStatus.innerHTML = ''
}

export async function updatePlayerPokemonHealth() {
    await sleep(100)
    playerHealthBar.animate({
        width: `${opponent.getters['getPokemon'].healthPercentage}%`
    }, {
        duration: 500,
        fill: 'forwards'
    })

    changeHealthBarColor(playerHealthBar, opponent.getters['getPokemon'].healthPercentage)
    await sleep(1000)
}

export async function updateOpponentPokemonHealth() {
    await sleep(100)
    opponentHealthBar.animate({
        width: `${opponent.getters['getPokemon'].healthPercentage}%`
    }, {
        duration: 500,
        fill: 'forwards'
    })

    changeHealthBarColor(opponentHealthBar, opponent.getters['getPokemon'].healthPercentage)

    await sleep(1000)
}

/**
 * Create Pokémon Status Card and returns the HealthBar for later use.
 * @param pokemon
 * @param statusContainer
 * @returns {Element}
 */
function createPokemonStatusCard(pokemon, statusContainer) {
    const card = document.createElement('div')
    card.classList.add('pokemon-status')
    card.innerHTML = `
        <div class="pokemon-status">
            <div class="pokemon-status__name">
                <h2>${pokemon.name}</h2>
                <span>lvl ${pokemon.level}</span>
            </div>
    
            <div class="pokemon-status__health">
                <span>HP:</span>
                <div class="health-bar">
                    <div class="current-health"></div>
                </div>
            </div>
        </div>`

    const healthBar = card.querySelector('.current-health')
    healthBar.style.width = `${pokemon.healthPercentage}%`
    changeHealthBarColor(healthBar, pokemon.healthPercentage)

    statusContainer.innerHTML = ''
    statusContainer.append(card)

    return healthBar
}

export function changeHealthBarColor(healthBar, percentage) {
    if (percentage <= 20) {
        healthBar.style.backgroundColor = 'red'
    } else if (percentage < 50) {
        healthBar.style.backgroundColor = 'orange'
    } else {
        healthBar.style.backgroundColor = 'green'
    }
}
