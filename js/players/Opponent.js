import {Player} from "./Player.js"
import {opponent, sleep} from "../script.js"
import {showMessageMenu} from "../views/Battle/Menu/MessageMenu.js"
import {loadInOpponentPokemon} from "../views/Battle/Characters.js"
import {playerTurn} from "../views/Battle/TrainerTurns.js"

export class Opponent extends Player {
    type = 'Trainer'

    pickRandomPokemon() {
        const notDefeatedPokemon = this.pokemon.filter(pokemon => !pokemon.isTakenDown)
        return notDefeatedPokemon[Math.floor(Math.random() * notDefeatedPokemon.length)]
    }

    async throwInNewPokemon() {
        const newPokemon = this.pickRandomPokemon()
        await showMessageMenu(`Rival ${opponent.nickname} is <br>about to send in ${newPokemon.name}`)
        await loadInOpponentPokemon(newPokemon)
        await playerTurn()
    }
}
