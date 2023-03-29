import {gameCanvas, resetCanvas, sleep} from "../../script.js"
import {playBattleMusic, playWinMusic} from "../../music.js"
import {loadInOpponentPokemon, loadInPlayerPokemon} from "./PokemonEvents.js"
import {battle} from "../../store/battle.js"
import {opponent} from "../../store/opponent.js"
import {player} from "../../store/player.js"
import {showMessage} from "./Menu/MessageMenu.js"
import {showOpponentStatus, showPlayerStatus} from "./StatusCard/PokeballStatus.js"
import {resetOpponentPokemonStatus, resetPlayerPokemonStatus} from "./StatusCard/PokemonStatus.js"

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

    startBattleSequence().then(r => r)
}

async function startBattleSequence() {
    const debug = false

    if (debug) {
        await loadInOpponentPokemon(opponent.getters['getRandomPokemon'])
        await loadInPlayerPokemon(player.getters['getFirstPokemon'])

        await battle.dispatch('startMenu')
        await createKeyboardEvents()

        return
    }

    await player.dispatch('showPlayerCharacter')
    await opponent.dispatch('showOpponentCharacter')

    await sleep(1000)

    showOpponentStatus()

    await battle.dispatch('message', `You have been challenged by <br>Trainer ${opponent.getters['getOpponent'].name}`)
    await opponent.dispatch('hideOpponentCharacter')

    await loadInOpponentPokemon(opponent.getters['getRandomPokemon'])

    showPlayerStatus()

    await player.dispatch('hidePlayerCharacter')

    await loadInPlayerPokemon(player.getters['getFirstPokemon'])

    await battle.dispatch('startMenu')
    await createKeyboardEvents()
}

async function createKeyboardEvents() {
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            battle.dispatch('startMenu')
        }
    })
}

export async function runWinSequence() {
    playWinMusic()

    await opponent.dispatch('showOpponentCharacter')
    await opponent.dispatch('animateOpponentSlideIn')

    await showMessage(`That's enough ${opponent.getters['getOpponent'].name}!`, 2000)

    await showMessage('After the battle, a fresh wind blew through my heart...', 2000)
    await showMessage('Use the battle with me as a stepping stone and move forward!', 2000)
}

