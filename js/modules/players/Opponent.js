import {Player} from "./Player.js"

export class Opponent extends Player {
    type = 'Trainer'

    pickRandomPokemon() {
        const notDefeatedPokemon = this.pokemon.filter(pokemon => !pokemon.fainted)
        return notDefeatedPokemon[Math.floor(Math.random() * notDefeatedPokemon.length)]
    }
}
