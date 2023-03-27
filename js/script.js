import {openStartScreen} from "./StartScreen.js"
import {Player} from "./modules/players/Player.js"
import {Squirtle} from "./modules/pokemon/Squirtle.js"
import {Opponent} from "./modules/players/Opponent.js"
import {Dratini} from "./modules/pokemon/Dratini.js"
import {player, playerStates} from "./store/player.js"
import {opponent, opponentStates} from "./store/opponent.js"
import {SuperPotion} from "./modules/items/potions/SuperPotion.js"

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
        // new Dratini(50),
        new Squirtle({
            level: 10,
        }),
        new Dratini({
            level: 10,
        }),
    ],

    items: [
        new SuperPotion(3)
    ],

    picture: 'img/characters/player-frame.png'
}))

await opponent.commit(opponentStates.SET_OPPONENT, new Opponent({
    name: 'Cheren',

    pokemon: [
        new Squirtle({
            level: 10
        }),
    ],

    picture: 'img/characters/cheren.webp',
}))

openStartScreen()
