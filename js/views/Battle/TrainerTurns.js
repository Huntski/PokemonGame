import {opponentUseMove} from "./BattleEvents.js"
import {battle, battleStates} from "../../store/battle.js"
import {opponent} from "../../store/opponent.js"

export async function opponentTurn() {
    const randomIndex = Math.floor(Math.random() * opponent.getters['getPokemon'].abilities.length)
    const randomAbility = opponent.getters['getPokemon'].abilities[randomIndex]

    await opponentUseMove(randomAbility)
}

export async function playerTurn() {
    await battle.dispatch('startMenu')
}
