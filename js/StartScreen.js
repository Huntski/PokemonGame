import {gameCanvas} from "./script.js"
import {startBattle} from "./views/Battle/Battle.js"

export function openStartScreen() {
    gameCanvas.append(startScreenTemplate())
}

function startScreenTemplate() {
    const nodeElement = document.createElement('div')

    nodeElement.classList.add('start-screen')

    nodeElement.innerHTML = `<button class="start-button">START</button>`

    const startButton =  nodeElement.querySelector('.start-button')
    startButton.addEventListener('click', handleClickStartEvent)

    return nodeElement
}

function handleClickStartEvent() {
    startBattle()
}
