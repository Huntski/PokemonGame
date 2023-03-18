import {openStartScreen} from "./StartScreen.js"
import {Player} from "./players/Player.js"
import {Squirtle} from "./pokemon/Squirtle.js"
import {Opponent} from "./players/Opponent.js"
import {Dratini} from "./pokemon/Dratini.js"
import {showPokemonSelectMenu} from "./views/Battle/Menu/PokemonSelectMenu.js"

export const gameCanvas = document.querySelector('#game-canvas')

export function resetCanvas() {
    gameCanvas.innerHTML = ''
}

export async function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration)
    })
}

export const player = new Player({
    name: 'Wieb',

    pokemon: [
        new Dratini(10),
        new Squirtle(8),
        new Dratini(10),
        new Dratini(10),
        new Dratini(10),
        new Dratini(10),
    ],

    picture: 'img/characters/player-frame.png'
})

export const opponent = new Opponent({
    name: 'Cheren',

    pokemon: [
        new Squirtle(8),
        new Squirtle(8),
        new Squirtle(8),
    ],

    picture: 'img/characters/cheren.webp',
})

openStartScreen()
