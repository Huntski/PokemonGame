import {opponentContainer, playerContainer} from "./Battle.js"
import {showMessageMenu} from "./Menu/MessageMenu.js"
import {opponent, sleep} from "../../script.js"
import {showOpponentPokemonStatus, showPlayerPokemonStatus} from "./StatusCard/PokemonStatus.js"

export let currentPlayerPokemon = null
export let currentOpponentPokemon = null

export async function loadInPlayerPokemon(pokemon) {
    playerContainer.innerHTML = ''

    await showMessageMenu(`You send in <br>${pokemon.name}!`)

    currentPlayerPokemon = pokemon

    const pokemonElement = document.createElement('img')
    pokemonElement.src = pokemon.characterFromBack
    pokemonElement.classList.add('animate-pokemon-join', 'pokemon')

    playerContainer.append(pokemonElement)

    currentPlayerPokemon.setPokemonElement(pokemonElement)
    currentPlayerPokemon = pokemon

    pokemon.cry()

    await sleep(500)
    showPlayerPokemonStatus()
    await sleep(500)
}

export async function loadInOpponentPokemon(pokemon) {
    opponentContainer.innerHTML = ''

    await showMessageMenu(`Rival ${opponent.nickname} send in <br>${pokemon.name}!`)

    currentOpponentPokemon = pokemon

    const pokemonElement = document.createElement('img')
    pokemonElement.src = pokemon.characterFromFront
    pokemonElement.classList.add('animate-pokemon-join', 'pokemon')

    opponentContainer.append(pokemonElement)

    currentOpponentPokemon.setPokemonElement(pokemonElement)
    currentOpponentPokemon = pokemon

    pokemon.cry()

    await sleep(1000)

    showOpponentPokemonStatus()

    await sleep(1000)
}

export async function getPokemonBack(pokemon) {
    pokemon.element.animate([
        {opacity: 1},
        {opacity: 0}
    ], {
        duration: 500,
        fill: 'forwards'
    }).finished

    await sleep(1000)
}
