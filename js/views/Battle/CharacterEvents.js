import {opponentContainer, playerContainer} from "./Battle.js"
import {opponent, player} from "../../script.js"

export let playerElement = null
export let opponentElement = null

export function showPlayerCharacter() {
    const element = document.createElement('img')
    element.src = player.imageSrc
    element.classList.add('character')

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
    element.src = opponent.imageSrc
    element.classList.add('character')

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

