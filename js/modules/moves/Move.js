export class Move {
    constructor({
            name = "",
            power = 0,
            pp = 20,
            ppUsed = 0,
            type = 'normal'
        }) {
        if (!power) power = 40

        this.name = name.replace('-', ' ').toUpperCase()
        this.power = power
        this.pp = pp
        this.ppUsed = ppUsed
        this.type = type
    }

    useMove() {
        if (this.ppUsed < this.pp) {
            this.ppUsed++
        }
    }

    get currentPP() {
        return this.pp - this.ppUsed
    }

    animation = async (pokemon) => {
        await pokemon.element.animate([
            {transform: `translate(0)`},
            {transform: `translate(-40px)`},
            {transform: `translate(50px)`},
            {transform: `translate(0)`}
        ], {
            duration: 400,
        })
    }

    animationFromOpponent = async (pokemon) => {
        await pokemon.element.animate([
            {transform: `translate(0)`},
            {transform: `translate(40px)`},
            {transform: `translate(-50px)`},
            {transform: `translate(0)`}
        ], {
            duration: 400,
        }).finished
    }
}
