import {
    currentOpponentPokemon,
    currentOpponentPokemonElement,
    currentPlayerPokemon,
    currentPlayerPokemonElement
} from "./Battle.js"
import {playPokemonLowMusic, takeDamageSoundEffect} from "../../music.js"
import {showStartMenu} from "./Menu/StartMenu.js"
import {showMessageMenu} from "./Menu/MessageMenu.js"
import {updatePokemonHealth} from "./PokemonStatus.js"
import {sleep} from "../../script.js"

export async function playerUseAbility(ability) {
    await showMessageMenu(`${currentPlayerPokemon.name} uses ${ability.name}!`)

    await ability.animation(currentPlayerPokemonElement)

    takeDamageSoundEffect()
    currentOpponentPokemon.takeDamage(ability.damage * (currentOpponentPokemon.level / 2))

    await currentOpponentPokemonElement.animate([
        {opacity: '.5'},
        {opacity: '1'},
        {opacity: '.5'},
        {opacity: '1'},
        {opacity: '.5'},
    ], {
        duration: 600,
    })

    updatePokemonHealth()

    await sleep(1000)

    opponentTurn()
}

function opponentTurn() {
    if (currentOpponentPokemon.isTakenDown) {
        // this.opponentCheckNextPokemon()
    } else {
        const randomAbility = currentOpponentPokemon.abilities[
            Math.floor(Math.random() * currentOpponentPokemon.abilities.length)
        ]

        opponentUseMove(randomAbility).then(_ => {
            showStartMenu()
        })
    }
}

export async function opponentUseMove(ability) {
    await showMessageMenu(`${currentOpponentPokemon.name} uses ${ability.name}!`)

    await ability.animationFromOpponent(currentOpponentPokemonElement)

    takeDamageSoundEffect()
    currentPlayerPokemon.takeDamage(ability.damage * (currentOpponentPokemon.level / 2))
    checkIfPlayerPokemonIsLow()

    await currentPlayerPokemonElement.animate([
        {opacity: '.5'},
        {opacity: '1'},
        {opacity: '.5'},
        {opacity: '1'},
        {opacity: '.5'},
    ], {
        duration: 600,
    })

    updatePokemonHealth()

    await sleep(1000)
}

function checkIfPlayerPokemonIsLow() {
    if (currentPlayerPokemon.currentHealth < 20) {
        playPokemonLowMusic()
    }
}
