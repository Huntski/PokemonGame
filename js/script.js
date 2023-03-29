import {openStartScreen} from "./StartScreen.js"
import {Player} from "./modules/players/Player.js"
import {Opponent} from "./modules/players/Opponent.js"
import {player, playerStates} from "./store/player.js"
import {opponent, opponentStates} from "./store/opponent.js"
import {SuperPotion} from "./modules/items/potions/SuperPotion.js"
import {getRandomPokemon} from "./services/PokemonApi.js"
import {Potion} from "./modules/items/potions/Potion.js"
import {hideSpinner} from "./views/Battle/LoadingSpinner.js"

export const gameCanvas = document.querySelector('#game-canvas')

export function resetCanvas() {
    gameCanvas.innerHTML = ''
}

export async function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration)
    })
}

await player.commit(playerStates.SET_PLAYER, new Player({
    name: 'Wieb',

    pokemon: [
        await getRandomPokemon(),
        await getRandomPokemon(),
        await getRandomPokemon(),
        await getRandomPokemon(),
        await getRandomPokemon(),
        await getRandomPokemon()
    ],

    items: [
        new SuperPotion(3),
        new Potion(4)
    ],

    picture: 'img/characters/player-frame.png'
}))

await opponent.commit(opponentStates.SET_OPPONENT, new Opponent({
    name: 'Cheren',

    pokemon: [
        await getRandomPokemon(),
        await getRandomPokemon(),
        await getRandomPokemon(),
        await getRandomPokemon()
    ],

    picture: 'img/characters/cheren.webp',
}))

hideSpinner()

openStartScreen()
