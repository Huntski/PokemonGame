export class Player {
    constructor({name = 'Player', pokemon = [], }) {
        this.pokemon = []
        this.currentlyHolding = []
        this.imageSrc = 'img/characters/player-frame.png'

        this.name = name
        pokemon.forEach(pokemon => {
            this.pokemon.push(pokemon)
        })

        for (let i = 0; i <= 6 && i < this.pokemon.length; i++) {
            this.currentlyHolding.push(this.pokemon[i])
        }
    }

    get nickname() {
        return this.name.toUpperCase()
    }
}


