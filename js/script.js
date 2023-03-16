import {openStartScreen} from "./StartScreen.js"
import {Player} from "./players/Player.js"
import {Squirtle} from "./pokemon/Squirtle.js"
import {Opponent} from "./players/Opponent.js"

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
        new Squirtle(),

        new Squirtle(),
    ]
})

export const opponent = new Opponent({
    name: 'James',

    pokemon: [
        new Squirtle(),

        new Squirtle(),
    ]
})

openStartScreen()
