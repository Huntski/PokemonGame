import {showStartMenu} from "./Menu/StartMenu.js"
import {opponentUseMove} from "./BattleEvents.js"
import {playPokemonLowMusic} from "../../music.js"
import {opponent} from "../../script.js"
import {showMessageMenu} from "./Menu/MessageMenu.js"
import {currentOpponentPokemon, currentPlayerPokemon} from "./PokemonEvents.js"

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
    if (currentPlayerPokemon.fainted) {
        await currentPlayerPokemon.animateTakeDown()
    } else if (currentPlayerPokemon.currentHealth < 20) {
        playPokemonLowMusic()
    }

    playerTurn()
}

export async function checkOpponentPokemonHealth() {
    if (currentOpponentPokemon.fainted) {
        await currentOpponentPokemon.animateTakeDown()
        await showMessageMenu(`${opponent.nickname}'s ${currentOpponentPokemon.name} fainted!`)
        await opponent.throwInNewPokemon()
    } else {
        await opponentTurn()
    }
}
