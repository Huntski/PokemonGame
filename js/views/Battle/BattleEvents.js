import {takeDamageSoundEffect} from "../../music.js"
import {showMessageMenu} from "./Menu/MessageMenu.js"
import {updateOpponentPokemonHealth, updatePlayerPokemonHealth} from "./StatusCard/PokemonStatus.js"
import {opponent} from "../../script.js"
import {calculateDamage} from "./CalculateDamage.js"
import {checkOpponentPokemonHealth, checkPlayerPokemonHealth} from "./TrainerTurns.js"
import {currentOpponentPokemon, currentPlayerPokemon, getPokemonBack, loadInPlayerPokemon} from "./PokemonEvents.js"
import {showStartMenu} from "./Menu/StartMenu.js"

export async function playerUseMove(move) {
    await showMessageMenu(`${currentPlayerPokemon.name} use ${move.name}!`)

    await move.animation(currentPlayerPokemon)

    takeDamageSoundEffect()

    const {damage, message} = calculateDamage(currentPlayerPokemon, currentOpponentPokemon, move)

    await currentOpponentPokemon.takeDamage(damage)
    move.useMove()
    await updateOpponentPokemonHealth()
    if (message) await showMessageMenu(message)
    await checkOpponentPokemonHealth()
}

export async function opponentUseMove(move) {
    await showMessageMenu(`${opponent.nickname}'s ${currentOpponentPokemon.name} uses ${move.name}!`)

    await move.animationFromOpponent(currentOpponentPokemon)

    takeDamageSoundEffect()

    const {damage, message} = calculateDamage(currentOpponentPokemon, currentPlayerPokemon, move)
    await currentPlayerPokemon.takeDamage(damage)

    move.useMove()

    await updatePlayerPokemonHealth()
    if (message) await showMessageMenu(message)
    await checkPlayerPokemonHealth()
}

export async function playerChangePokemon(newPokemon) {
    await showMessageMenu(`That's enough ${currentPlayerPokemon.name}!`)
    await getPokemonBack(currentPlayerPokemon)
    await loadInPlayerPokemon(newPokemon)
    showStartMenu()
}
