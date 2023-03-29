import {showMessage} from "../views/Battle/Menu/MessageMenu.js"
import {loadInOpponentPokemon} from "../views/Battle/PokemonEvents.js"
import {playerTurn} from "../views/Battle/TrainerTurns.js"
import {opponentContainer} from "../views/Battle/BattleSequence.js"
import Store from "../modules/Store.js"

/**
 * "../modules/players/Opponent.js"
 */
class state {
    opponent = null
    pokemon = null
    element = null
}

export const opponent = new Store({
    state: new state(),

    getters: {
        getOpponent(state) {
            return state.opponent
        },

        getPokemon(state) {
            return state.pokemon
        },

        getElement(state) {
            return state.element
        },

        getRandomPokemon(state) {
            return state.opponent.pickRandomPokemon()
        },

        getIsDefeated(state) {
            return state.opponent.allPokemonDefeated
        }
    },

    mutations: {
        SET_OPPONENT(state, opponent) {
            state.opponent = opponent
        },

        SET_POKEMON(state, pokemon) {
            state.pokemon = pokemon
        },

        SET_ELEMENT(state, element) {
            state.element = element
        },
    },

    actions: {
        async throwInNewPokemon({getters}) {
            const newPokemon = getters['getRandomPokemon']
            await showMessage(`Rival ${getters['getOpponent'].name} is <br>about to send in ${newPokemon.name}`)
            await loadInOpponentPokemon(newPokemon)
            await playerTurn()
        },

        async showOpponentCharacter({commit, getters}) {
            opponentContainer.innerHTML = ''

            const element = document.createElement('img')
            element.src = getters['getOpponent'].imageSrc
            element.classList.add('character')
            opponentContainer.append(element)
            commit('SET_ELEMENT', element)
        },

        async animateOpponentSlideIn({getters}) {
            getters['getElement'].animate([
                {transform: 'translateX(80%)', opacity: 0},
                {transform: 'translateX(0)', opacity: 1}
            ], {
                duration: 500,
                easing: 'ease-in',
                fill: "forwards"
            }).finished
        },

        async hideOpponentCharacter({getters}) {
            await getters['getElement'].animate([
                {transform: 'translateX(0)', opacity: 1},
                {transform: 'translateX(100px)', opacity: 0}
            ], {
                duration: 300,
                easing: 'ease-in',
                fill: "forwards"
            }).finished
        }
    },
})

export const opponentStates = {
    SET_OPPONENT: "SET_OPPONENT",
    SET_POKEMON: "SET_POKEMON",
    SET_ELEMENT: "SET_ELEMENT"
}
