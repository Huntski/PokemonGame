import {opponentContainer, playerContainer} from "../views/Battle/BattleSequence.js"
import Store from "../modules/Store.js"

/**
 * "../modules/players/Player.js"
 */
class state {
    player = null
    pokemon = null
    element = null
    statusElement = null
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

        getElement(state) {
            return state.element
        },

        getFirstPokemon(state) {
            return state.player.currentlyHolding[0]
        },

        getItems(state) {
            return state.player.items
        },

        getStatusElement(state) {
            return state.statusElement
        },

        getIsDefeated(state) {
            return state.player.allPokemonDefeated
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

        SET_STATUS_ELEMENT(state, element) {
            state.statusElement = element
        }
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
            await getters['getElement'].animate([
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
    SET_ELEMENT: "SET_ELEMENT",
    SET_STATUS_ELEMENT: "SET_STATUS_ELEMENT",
}
