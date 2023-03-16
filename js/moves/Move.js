export class Move {
    name = null
    damage = null
    animation = null
    pp = 20 // Also stands for: "Power Point"
    ppUsed = 0
    type = 'normal'

    getMoveDamage(level) {
        return this.damage + level
    }

    get currentPP() {
        return this.pp - this.ppUsed
    }
}
