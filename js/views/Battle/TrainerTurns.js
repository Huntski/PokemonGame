import {currentOpponentPokemon, currentPlayerPokemon} from "./Characters.js"
import {showStartMenu} from "./Menu/StartMenu.js"
import {opponentUseMove} from "./AttackEvents.js"
import {playPokemonLowMusic} from "../../music.js"
import {opponent} from "../../script.js"
import {showMessageMenu} from "./Menu/MessageMenu.js"

export async function opponentTurn() {
    console.log(currentOpponentPokemon.currentHealth)

    const randomIndex = Math.floor(Math.random() * currentOpponentPokemon.abilities.length)
    const randomAbility = currentOpponentPokemon.abilities[randomIndex]

    await opponentUseMove(randomAbility)
}

export function playerTurn() {
    showStartMenu()
}

export async function checkPlayerPokemonHealth() {
    if (currentPlayerPokemon.isTakenDown) {
        await currentPlayerPokemon.animateTakeDown()
    } else if (currentPlayerPokemon.currentHealth < 20) {
        playPokemonLowMusic()
    }

    playerTurn()
}

export async function checkOpponentPokemonHealth() {
    if (currentOpponentPokemon.isTakenDown) {
        await currentOpponentPokemon.animateTakeDown()
        await showMessageMenu(`${opponent.nickname}'s ${currentOpponentPokemon.name} fainted!`)
        await opponent.throwInNewPokemon()
    } else {
        await opponentTurn()
    }
}
