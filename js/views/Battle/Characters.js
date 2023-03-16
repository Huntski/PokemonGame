import {opponentContainer, playerContainer} from "./Battle.js"
import {opponent, player, sleep} from "../../script.js"
import {showMessageMenu} from "./Menu/MessageMenu.js"
import {showOpponentPokemonStatus, showPlayerPokemonStatus} from "./PokemonStatus.js"

export let currentPlayerPokemon = null
export let currentPlayerPokemonElement = null
export let currentOpponentPokemon = null
export let currentOpponentPokemonElement = null

export let playerElement = null
export let opponentElement = null

export function showPlayerCharacter() {
    const element = document.createElement('img')
    element.id = 'player-image'
    element.src = player.imageSrc
    element.classList.add('animate-slide-right')

    playerContainer.append(element)

    playerElement = element
}

export async function hidePlayerCharacter() {
    return playerElement.animate([
        {transform: 'translateX(0)', opacity: 1},
        {transform: 'translateX(-100px)', opacity: 0}
    ], {
        duration: 300,
        easing: 'ease-in',
        fill: "forwards"
    }).finished
}

export function showOpponentCharacter() {
    const element = document.createElement('img')
    element.id = 'player-image'
    element.src = player.imageSrc
    element.classList.add('animate-slide-left')

    opponentContainer.append(element)

    opponentElement = element
}

export async function hideOpponentCharacter() {
    return opponentElement.animate([
        {transform: 'translateX(0)', opacity: 1},
        {transform: 'translateX(100px)', opacity: 0}
    ], {
        duration: 300,
        easing: 'ease-in',
        fill: "forwards"
    }).finished
}

export async function loadInPlayerPokemon(pokemon) {
    playerContainer.innerHTML = ''

    await showMessageMenu(`You send in <br>${pokemon.name}!`)

    currentPlayerPokemon = pokemon

    const pokemonElement = document.createElement('img')
    pokemonElement.src = pokemon.characterFromBack
    pokemonElement.classList.add('animate-pokemon-join')

    playerContainer.append(pokemonElement)

    currentPlayerPokemonElement = pokemonElement
    currentPlayerPokemon = pokemon

    await sleep(500)

    showPlayerPokemonStatus()

    await sleep(500)
}

export async function loadInOpponentPokemon(pokemon) {
    opponentContainer.innerHTML = ''

    await showMessageMenu(`Trainer ${opponent.nickname} send in <br>${pokemon.name}!`)

    currentOpponentPokemon = pokemon

    const pokemonElement = document.createElement('img')
    pokemonElement.src = pokemon.characterFromFront
    pokemonElement.classList.add('animate-pokemon-join')

    opponentContainer.append(pokemonElement)

    currentOpponentPokemonElement = pokemonElement
    currentOpponentPokemon = pokemon

    await sleep(500)

    showOpponentPokemonStatus()

    await sleep(500)
}
