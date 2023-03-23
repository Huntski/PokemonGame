import {playerContainer} from "../views/Battle/BattleSequence.js"
import Store from "../modules/Store.js"

/**
 * "../modules/players/Player.js"
 */
class state {
    player = null
    pokemon = null
    element = null
}

export const player = new Store({
    state: new state(),

    getters: {
        getPlayer(state) {
            return state.player
        },

        getPokemon(state) {
            return state.pokemon
        },

        getFirstPokemon(state) {
            return state.player.currentlyHolding[0]
        }
    },

    mutations: {
        SET_PLAYER(state, player) {
            state.player = player
        },

        SET_POKEMON(state, pokemon) {
            state.pokemon = pokemon
        },

        SET_ELEMENT(state, element) {
            state.element = element
        },
    },

    actions: {
        async showPlayerCharacter({commit, getters}) {
            const element = document.createElement('img')
            element.src = getters['getPlayer'].imageSrc
            element.classList.add('character')

            playerContainer.append(element)

            commit("SET_ELEMENT", element)
        },

        async hidePlayerCharacter({getters}) {
            return getters['getPlayer'].element.animate([
                {transform: 'translateX(0)', opacity: 1},
                {transform: 'translateX(-100px)', opacity: 0}
            ], {
                duration: 300,
                easing: 'ease-in',
                fill: "forwards"
            }).finished
        }
    },
})

export const playerStates = {
    SET_PLAYER: "SET_PLAYER",
    SET_POKEMON: "SET_POKEMON",
    SET_ELEMENT: "SET_ELEMENT"
}
