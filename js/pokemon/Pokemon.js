import {generateId} from "./PokemonId.js"
import {pokemonCry} from "../music.js"
import {sleep} from "../script.js"

export class Pokemon {
    id = generateId()
    abilities = []
    level = 1
    health = 20
    name = ''
    type = 'normal'
    characterFromBack = ''
    characterFromFront = ''
    cryFileSrc = ''
    damageTaken = 0
    element = ''

    constructor(level = 5) {
        for (let i = 1; i < level; i++) {
            this.gainLevel()
        }
    }

    cry() {
        pokemonCry(this.cryFileSrc)
    }

    setPokemonElement(element) {
        this.element = element
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
        return this.currentHealth <= 0
    }

    get healthPercentage() {
        const percentage = (100 / this.health) * this.currentHealth

        if (percentage < 0) {
            return 0
        }

        return percentage
    }

    async takeDamage(amount) {
        this.damageTaken += amount

        await this.element.animate([
            {opacity: '.5'},
            {opacity: '1'},
            {opacity: '.5'},
            {opacity: '1'},
            {opacity: '.5'},
        ], {
            duration: 600,
        }).finished
    }

    async animateTakeDown() {
        this.cry()

        await this.element.animate([
            {transform: 'translateY(0)', opacity: 1},
            {transform: 'translateY(50px)', opacity: 0}
        ], {
            duration: 300,
            fill: "forwards"
        }).finished

        await sleep(500)
    }
}
