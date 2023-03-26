import {opponentContainer, playerContainer} from "./BattleSequence.js"
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

export async function loadInPlayerPokemon(pokemon) {
    playerContainer.innerHTML = ''

    await showMessage(`You send in <br>${pokemon.name}!`)

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

    await showMessage(`Rival ${opponent.getters['getOpponent'].nickname} send in <br>${pokemon.name}!`)

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

export async function getPokemonBack(pokemon) {
    pokeballOpenSoundEffect()
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
        console.log('PLAYER FAINTED')
        resetPlayerPokemonStatus()
        await player.getters['getPokemon'].animateTakeDown()
        await showMessage(`${player.getters['getPlayer'].nickname}'s ${player.getters['getPokemon'].name} fainted!`)
        await battle.dispatch('pokemonSelectMenu', false)
    } else if (player.getters['getPokemon'].isLow) {
        player.getters['getPokemon'].lowEvent()
    } else {
        checkWhichMusicToPlay()
    }
}

export async function checkOpponentPokemonHealth() {
    if (opponent.getters['getPokemon'].fainted) {
        resetOpponentPokemonStatus()
        await opponent.getters['getPokemon'].animateTakeDown()
        await showMessage(`${opponent.getters['getOpponent'].nickname}'s ${opponent.getters['getPokemon'].name} fainted!`)
        await opponent.dispatch('throwInNewPokemon')
    } else {
        await opponentTurn()
    }
}

