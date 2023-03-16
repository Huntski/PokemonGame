import {currentOpponentPokemon, currentPlayerPokemon} from "./Characters.js"
import {opponentStatus, playerStatus} from "./Battle.js"

export let playerHealthBar = null
export let opponentHealthBar = null

export function showPlayerPokemonStatus() {
    playerStatus.innerHTML = `
        <div class="status__name">
            <h2>${currentPlayerPokemon.name}</h2>
            <span>lvl ${currentPlayerPokemon.level}</span>
        </div>

        <div class="status__health">
            <span>HP:</span>
            <div class="health-bar">
                <div class="current-health player-health"></div>
            </div>
        </div>`

    playerHealthBar = playerStatus.querySelector('.current-health')

    playerHealthBar.style.width = `${currentPlayerPokemon.healthPercentage}%`

    changeHealthBarColor(playerHealthBar, currentPlayerPokemon.healthPercentage)

    playerStatus.style.display = 'block'
}

export function showOpponentPokemonStatus() {
    opponentStatus.innerHTML = `
        <div class="status__name">
                <h2>${currentOpponentPokemon.name}</h2>
                <span>lvl ${currentOpponentPokemon.level}</span>
            </div>

            <div class="status__health">
                <span>HP:</span>
                <div class="health-bar">
                    <div class="current-health opponent-health"></div>
                </div>
        </div>`

    opponentHealthBar = opponentStatus.querySelector('.current-health')

    opponentHealthBar.style.width = `${currentOpponentPokemon.healthPercentage}%`
    changeHealthBarColor(opponentHealthBar, currentOpponentPokemon.healthPercentage)

    opponentStatus.style.display = 'block'
}

export function updatePokemonHealth() {
    const currentPlayerHealth = calculateHealthPercentage(currentPlayerPokemon.health, currentPlayerPokemon.currentHealth)
    const currentOpponentHealth = calculateHealthPercentage(currentOpponentPokemon.health, currentOpponentPokemon.currentHealth)

    playerHealthBar.style.width = `${currentPlayerHealth}%`
    opponentHealthBar.style.width = `${currentOpponentHealth}%`

    changeHealthBarColor(playerHealthBar, currentPlayerHealth)
    changeHealthBarColor(opponentHealthBar, currentOpponentHealth)
}

function changeHealthBarColor(healthBar, percentage) {
    console.log(healthBar)

    if (percentage < 20) {
        healthBar.style.backgroundColor = 'red'
    } else if (percentage < 50) {
        healthBar.style.backgroundColor = 'orange'
    } else {
        healthBar.style.backgroundColor = 'green'
    }
}

function calculateHealthPercentage(health, currentHealth) {
    const percentage = (100 / health) * currentHealth

    if (percentage < 0) {
        return 0
    }

    return percentage
}
