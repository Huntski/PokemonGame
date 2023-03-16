import {currentOpponentPokemon, currentPlayerPokemon} from "./Characters.js"

export function showOpponentPokemonStatus() {
    const template = `
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
}

export function updatePokemonHealth() {
    const playerHealthBar = document.querySelector('.player-health')
    const opponentHealthBar = document.querySelector('.opponent-health')

    const currentPlayerHealth = calculateHealthPercentage(currentPlayerPokemon.health, currentPlayerPokemon.currentHealth)
    const currentOpponentHealth = calculateHealthPercentage(currentOpponentPokemon.health, currentOpponentPokemon.currentHealth)

    playerHealthBar.style.width = `${currentPlayerHealth}%`
    opponentHealthBar.style.width = `${currentOpponentHealth}%`

    changeHealthBarColor(playerHealthBar, currentPlayerHealth)
    changeHealthBarColor(opponentHealthBar, currentOpponentHealth)
}

function changeHealthBarColor(healthBar, percentage) {
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
