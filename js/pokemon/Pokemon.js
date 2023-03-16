import {generateId} from "./PokemonId.js"

export class Pokemon {
    id = generateId()
    abilities = []
    level = 1
    health = 20
    name = ''
    characterFromBack = ''
    characterFromFront = ''
    damageTaken = 0

    constructor(level = 5) {
        for (let i = 1; i < level; i++) {
            this.gainLevel()
        }
    }

    gainLevel() {
        this.level++
        this.health += 20
    }

    learnAbility(ability) {
        this.abilities.push(ability)
    }

    get currentHealth() {
        return this.health - this.damageTaken
    }

    get isTakenDown() {
        return this.health < 0
    }

    get healthPercentage() {
        const percentage = (100 / this.health) * this.currentHealth

        if (percentage < 0) {
            return 0
        }

        return percentage
    }

    takeDamage(amount) {
        this.damageTaken += amount
    }
}
