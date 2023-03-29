import {takeDamageSoundEffect} from "../../music.js"
import {showMessage} from "./Menu/MessageMenu.js"
import {
    resetPlayerPokemonStatus,
    updateOpponentPokemonHealth,
    updatePlayerPokemonHealth
} from "./StatusCard/PokemonStatus.js"
import {calculateDamage} from "./CalculateDamage.js"
import {playerTurn} from "./TrainerTurns.js"
import {showStartMenu} from "./Menu/StartMenu.js"
import {opponent} from "../../store/opponent.js"
import {player} from "../../store/player.js"
import {
    checkOpponentPokemonHealth,
    checkPlayerPokemonHealth,
    getPokemonBack,
    loadInPlayerPokemon
} from "./PokemonEvents.js"

export async function playerUseMove(move) {
    await showMessage(`${player.getters['getPokemon'].name} use ${move.name}!`)

    await move.animation(player.getters['getPokemon'])

    takeDamageSoundEffect()

    const {damage, message} = calculateDamage(player.getters['getPokemon'], opponent.getters['getPokemon'], move)

    await opponent.getters['getPokemon'].takeDamage(damage)
    move.useMove()
    await updateOpponentPokemonHealth()
    if (message) await showMessage(message)
    await checkOpponentPokemonHealth()
}

export async function opponentUseMove(move) {
    await showMessage(`${opponent.getters['getOpponent'].name}'s ${opponent.getters['getPokemon'].name} uses ${move.name}!`)

    await move.animationFromOpponent(opponent.getters['getPokemon'])

    takeDamageSoundEffect()

    const {damage, message} = calculateDamage(opponent.getters['getPokemon'], player.getters['getPokemon'], move)
    await player.getters['getPokemon'].takeDamage(damage)

    move.useMove()

    await updatePlayerPokemonHealth()
    if (message) await showMessage(message)
    await checkPlayerPokemonHealth()
    await playerTurn()
}

export async function playerChangePokemon(newPokemon) {
    if (!player.getters['getPokemon'].fainted) {
        await showMessage(`That's enough ${player.getters['getPokemon'].name}!`)
        resetPlayerPokemonStatus()
        await getPokemonBack(player.getters['getPokemon'])
    }
    await loadInPlayerPokemon(newPokemon)
    await checkPlayerPokemonHealth()
    await showStartMenu()
}
