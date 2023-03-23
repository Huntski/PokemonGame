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
        async message({commit}, params) {
            commit(battleStates.MESSAGE, await showMessage(params))
        },

        async fightMenu({commit}) {
            commit(battleStates.FIGHT_MENU, await showFightMenu())
        },

        async startMenu({commit}) {
            commit(battleStates.START, await showStartMenu())
        },

        async pokemonSelectMenu({commit}) {
            commit(battleStates.POKEMON_SELECT, await showPokemonSelectMenu())
        }
    }
})

export const battleStates = {
    MESSAGE: "MESSAGE",
    FIGHT_MENU: "FIGHT_MENU",
    START: "START",
    POKEMON_SELECT: "POKEMON_SELECT",
}
