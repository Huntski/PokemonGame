export class Player {
    constructor({name = 'Player', pokemon = [], picture = '' , items = []}) {
        this.pokemon = pokemon
        this.currentlyHolding = []
        this.items = items
        this.imageSrc = picture
        this.name = name.toUpperCase()

        for (let i = 0; i < 6 && i < this.pokemon.length; i++) {
            this.currentlyHolding.push(this.pokemon[i])
        }
    }

    get allPokemonDefeated() {
        for (let index in this.currentlyHolding) {
            if (this.currentlyHolding[index].fainted === false) {
                return false
            }
        }

        return true
    }
}


