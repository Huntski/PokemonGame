import {opponentContainer, playerContainer, runWinSequence} from "./BattleSequence.js"
import {showMessage} from "./Menu/MessageMenu.js"
import {sleep} from "../../script.js"
import {
    resetOpponentPokemonStatus,
    resetPlayerPokemonStatus,
    showOpponentPokemonStatus,
    showPlayerPokemonStatus
} from "./StatusCard/PokemonStatus.js"
import {opponentTurn} from "./TrainerTurns.js"
import {checkWhichMusicToPlay, pokeballOpenSoundEffect} from "../../music.js"
import {opponent, opponentStates} from "../../store/opponent.js"
import {player, playerStates} from "../../store/player.js"
import {battle} from "../../store/battle.js"
import {showOpponentStatus} from "./StatusCard/PokeballStatus.js"

export async function loadInPlayerPokemon(pokemon) {
    playerContainer.innerHTML = ''

    await showMessage(`You send in <br>${pokemon.name}!`)

    resetPlayerPokemonStatus()

    await player.commit(playerStates.SET_POKEMON, pokemon)

    const pokemonElement = document.createElement('img')
    pokemonElement.src = pokemon.characterFromBack
    pokemonElement.classList.add('animate-pokemon-join', 'pokemon')

    pokeballOpenSoundEffect()
    await sleep(400)
    playerContainer.append(pokemonElement)

    pokemon.setPokemonElement(pokemonElement)
    player.getters['getPokemon'] = pokemon

    pokemon.cry()

    await sleep(500)
    showPlayerPokemonStatus()
    await checkPlayerPokemonHealth()
    await sleep(500)
}

export async function loadInOpponentPokemon(pokemon) {
    opponentContainer.innerHTML = ''

    await showMessage(`Rival ${opponent.getters['getOpponent'].name} send in <br>${pokemon.name}!`)

    resetOpponentPokemonStatus()

    const pokemonElement = document.createElement('img')
    pokemonElement.src = pokemon.characterFromFront
    pokemonElement.classList.add('animate-pokemon-join', 'pokemon')

    pokeballOpenSoundEffect()
    await sleep(400)
    opponentContainer.append(pokemonElement)

    pokemon.setPokemonElement(pokemonElement)
    await opponent.commit(opponentStates.SET_POKEMON, pokemon)

    pokemon.cry()

    await sleep(1000)

    showOpponentPokemonStatus()

    await sleep(1000)
}

export async function getPokemonBack(pokemon, sound = true) {
    if (sound) pokeballOpenSoundEffect()

    await sleep(400)

    pokemon.element.animate([
        {opacity: 1},
        {opacity: 0}
    ], {
        duration: 500,
        fill: 'forwards'
    }).finished

    await sleep(1000)
}

export async function checkPlayerPokemonHealth() {
    if (player.getters['getPokemon'].fainted) {
        resetPlayerPokemonStatus()
        await player.getters['getPokemon'].animateTakeDown()
        await showMessage(`${player.getters['getPlayer'].name}'s ${player.getters['getPokemon'].name} fainted!`)
        await battle.dispatch('pokemonSelectMenu', false)
    } else if (player.getters['getPokemon'].isLow) {
        player.getters['getPokemon'].lowEvent()
    }

    checkWhichMusicToPlay()
}

export async function checkOpponentPokemonHealth() {
    if (opponent.getters['getPokemon'].fainted) {
        resetOpponentPokemonStatus()
        await opponent.getters['getPokemon'].animateTakeDown()
        await showMessage(`${opponent.getters['getOpponent'].name}'s ${opponent.getters['getPokemon'].name} fainted!`)
        if (opponent.getters['getIsDefeated']) {
            await runWinSequence()
        } else {
            showOpponentStatus()
            await opponent.dispatch('throwInNewPokemon')
        }
    } else {
        await opponentTurn()
    }
}

