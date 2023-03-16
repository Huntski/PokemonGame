import {gameCanvas, opponent, player, resetCanvas, sleep} from "../../script.js"
import {playBattleMusic} from "../../music.js"
import {
    hideOpponentCharacter,
    hidePlayerCharacter,
    loadInOpponentPokemon, loadInPlayerPokemon,
    showOpponentCharacter,
    showPlayerCharacter
} from "./Characters.js"
import {showMessageMenu} from "./Menu/MessageMenu.js"
import {showStartMenu} from "./Menu/StartMenu.js"

export let battleMenu = null
export let playerStatus = null
export let opponentStatus = null

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
    const battleElement = document.createElement('div')

    battleElement.innerHTML = `
        <div class="pokemon-container">
            <div class="opponent-container animate-slide-left"></div>
        
            <div class="player-container animate-slide-right"></div>
        </div>

        <div class="battle-ui">
            <div class="status status--opponent"></div> 

            <div class="status status--player"></div>
 
            <div class="battle-menu"></div>
        </div>`

    gameCanvas.appendChild(battleElement)

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
}



