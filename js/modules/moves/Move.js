export class Move {
    name = null
    damage = null
    animation = null
    pp = 20 // Also stands for: "Power Point"
    ppUsed = 0
    type = 'normal'

    getMoveDamage(level) {
        return this.damage * (level / 2)
    }

    useMove() {
        if (this.ppUsed < this.pp) {
            this.ppUsed++
        }
    }

    get currentPP() {
        return this.pp - this.ppUsed
    }
}
