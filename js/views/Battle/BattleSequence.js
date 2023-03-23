import {gameCanvas, resetCanvas, sleep} from "../../script.js"
import {playBattleMusic} from "../../music.js"
import {loadInOpponentPokemon, loadInPlayerPokemon} from "./PokemonEvents.js"
import {battle, battleStates} from "../../store/battle.js"
import {opponent} from "../../store/opponent.js"
import {player} from "../../store/player.js"

export let battleMenu = null
export let playerStatus = null
export let opponentStatus = null
export let battleCanvas = null

export function startBattle() {
    resetCanvas()
    playBattleMusic()
    CreateBattleInterface()
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

    startBattleSequence().then(r => r)
}

async function startBattleSequence() {
    try {
        await player.dispatch('showPlayerCharacter')
        await opponent.dispatch('showOpponentCharacter')
        await sleep(1000)
        await battle.dispatch('message', `You have been challenged by <br>Trainer ${opponent.getters['getOpponent'].nickname}`)
        await opponent.dispatch('hideOpponentCharacter')
        await loadInOpponentPokemon(opponent.getters['getRandomPokemon'])
        await player.dispatch('hidePlayerCharacter')
        await loadInPlayerPokemon(player.getters['getFirstPokemon'])
        await battle.commit(battleStates.START)
        await createKeyboardEvents()
    } catch (e) {
        console.log(e)
    }
}

async function createKeyboardEvents() {
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            battle.dispatch('startMenu')
        }
    })
}
