import {generateId} from "./PokemonId.js"
import {playBattleMusic, pokemonCry} from "../../music.js"
import {sleep} from "../../script.js"

export class Pokemon {
    id = generateId()

    constructor({
        id = 0,
        level = 0,
        health = 20,
        abilities =  [],
        name =  '',
        types =  ['normal'],
        characterFromBack =  '',
        characterFromFront =  '',
        damageTaken =  0,
        element =  '',

        defense = 0,
        attack = 0,
        speed = 0,
    }) {
        this.id = id
        this.level = 0
        this.health = health
        this.abilities = abilities
        this.name = name.replace('-', ' ').toUpperCase()
        this.types = types
        this.characterFromBack = characterFromBack
        this.characterFromFront = characterFromFront
        this.damageTaken = damageTaken
        this.element = element

        this.defense = defense
        this.attack = attack
        this.speed = speed

        this.originalHealth = health

        for (let i = 0; i < level; i++) {
            this.level++
            this.health += this.originalHealth * 0.05
        }
    }

    cry() {
        // The use of pad: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
        const idWithPadding = String(this.id).padStart(3, '0')
        const pokemonName = this.name.charAt(0).toUpperCase() + this.name.slice(1).toLowerCase()
        const fileName = `${idWithPadding} - ${pokemonName}.wav`

        pokemonCry(fileName)
    }

    setPokemonElement(element) {
        this.element = element
    }

    gainLevel() {
        this.health += this.originalHealth * 0.05
    }

    learnAbility(ability) {
        this.abilities.push(ability)
    }

    get currentHealth() {
        const currentHealth = this.health - this.damageTaken

        if (currentHealth < 0) {
            return 0
        }

        return currentHealth
    }

    get fainted() {
        return this.currentHealth <= 0
    }

    get isLow() {
        return this.healthPercentage < 20
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

    lowEvent() {
        this.element.classList.add('pokemon-low-hp')
    }

    /**
     * Heal Pokémon.
     * @param healAmount
     * @returns {number} Returns healed amount
     */
    heal(healAmount) {
        const healthBeforeHeal = this.currentHealth

        this.damageTaken -= healAmount

        if (this.damageTaken < 0) {
            this.damageTaken = 0
        }

        this.element.classList.remove('pokemon-low-hp')

        return this.currentHealth - healthBeforeHeal
    }
}
