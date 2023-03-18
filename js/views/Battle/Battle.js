import {gameCanvas, opponent, player, resetCanvas, sleep} from "../../script.js"
import {playBattleMusic} from "../../music.js"
import {
    hideOpponentCharacter,
    hidePlayerCharacter,
    loadInOpponentPokemon,
    loadInPlayerPokemon,
    showOpponentCharacter,
    showPlayerCharacter
} from "./Characters.js"
import {showStartMenu} from "./Menu/StartMenu.js"
import {showMessageMenu} from "./Menu/MessageMenu.js"

export let battleMenu = null
export let playerStatus = null
export let opponentStatus = null
export let battleCanvas = null

export function startBattle() {
    resetCanvas()
    playBattleMusic()
    sleep(300).then(() => {
        CreateBattleInterface()
    })
}

export let playerContainer = null
export let opponentContainer = null

function CreateBattleInterface() {
    const battleCanvasElement = document.createElement('div')

    battleCanvasElement.innerHTML = `
        <div class="pokemon-container">
            <div class="opponent-container animate-slide-left"></div>
        
            <div class="player-container animate-slide-right"></div>
        </div>

        <div class="battle-ui">
            <div class="status status--opponent"></div> 

            <div class="status status--player"></div>
 
            <div class="battle-menu"></div>
        </div>`

    gameCanvas.appendChild(battleCanvasElement)

    battleCanvas = battleCanvasElement
    battleMenu = gameCanvas.querySelector('.battle-menu')
    playerStatus = gameCanvas.querySelector('.status--player')
    opponentStatus = gameCanvas.querySelector('.status--opponent')
    playerContainer = gameCanvas.querySelector('.player-container')
    opponentContainer = gameCanvas.querySelector('.opponent-container')

    startBattleSequence()
}

async function startBattleSequence() {
    showPlayerCharacter()
    showOpponentCharacter()
    await sleep(1000)
    await showMessageMenu(`You have been challenged by <br>Trainer ${opponent.nickname}`)
    await hideOpponentCharacter()
    await loadInOpponentPokemon(opponent.pokemon[0])
    await hidePlayerCharacter()
    await loadInPlayerPokemon(player.pokemon[0])

    showStartMenu()
    createKeyboardEvents()
}

function createKeyboardEvents() {
    document.addEventListener('keydown', e => {
        console.log(e.key)
        if (e.key === 'Escape') {
            showStartMenu()
        }
    })
}
