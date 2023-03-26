import {generateId} from "../pokemon/PokemonId.js"

export class Item {
    constructor(amount = 1) {
        this.amount = amount
        this.id = generateId()
    }

    addAmount() {
        this.amount++
    }

    removeAmount() {
        this.amount--
    }
}
