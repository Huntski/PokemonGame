import {player} from "../../../store/player.js"
import {opponentStatus, playerStatus} from "../BattleSequence.js"
import {opponent} from "../../../store/opponent.js"

export function showPlayerStatus() {
    createPlayerStatusCard(player.getters['getCurrentlyHolding'], playerStatus)
}

export function showOpponentStatus() {
    createPlayerStatusCard(opponent.getters['getCurrentlyHolding'], opponentStatus)
}

export function createPlayerStatusCard(pokemon, statusContainer) {
    const card = document.createElement('div')
    card.classList.add('pokeball-status')

    for (const poke of pokemon) {
        console.log(poke)
        const index = pokemon.indexOf(poke)
        const img = document.createElement('img')
        img.src = 'img/pokebal-icon.png'

        if (poke.fainted) {
            img.classList.add('fainted')
        }

        card.append(img)

        img.animate({
            transform: 'translateX(0)'
        }, {
            delay: 100 * index,
            duration: 300,
            fill: "forwards"
        })
    }

    statusContainer.innerHTML = ''
    statusContainer.append(card)
}
