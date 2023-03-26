export class Player {
    constructor({name = 'Player', pokemon = [], picture = '' , items = []}) {
        this.pokemon = pokemon
        this.currentlyHolding = []
        this.items = items
        this.imageSrc = picture
        this.name = name

        for (let i = 0; i < 6 && i < this.pokemon.length; i++) {
            this.currentlyHolding.push(this.pokemon[i])
        }
    }

    get nickname() {
        return this.name.toUpperCase()
    }
}


