import {showFightMenu} from "../views/Battle/Menu/FightMenu.js"
import {showMessage} from "../views/Battle/Menu/MessageMenu.js"
import showPokemonSelectMenu from "../views/Battle/Menu/PokemonSelectMenu/index.js"
import Store from "../modules/Store.js"
import {showStartMenu} from "../views/Battle/Menu/StartMenu.js"

class state {
    currentMenu = ''
}

export const battle = new Store({
    state: new state(),

    getters: {
        getCurrentMenu(state) {
            return state.currentMenu
        }
    },

    mutations: {
        SET_CURRENT_MENU(state, element) {
            state.currentMenu = element
        },
    },

    actions: {
        async startMenu({commit}) {
            commit('SET_CURRENT_MENU', await showStartMenu())
        },

        async message({commit}, params) {
            commit('SET_CURRENT_MENU', await showMessage(params))
        },

        async fightMenu({commit}) {
            commit('SET_CURRENT_MENU', await showFightMenu())
        },

        async pokemonSelectMenu({commit}) {
            commit('SET_CURRENT_MENU', await showPokemonSelectMenu())
        },
    }
})
