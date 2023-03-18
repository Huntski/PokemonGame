import {battleMenu} from "../Battle.js"

export function setBattleMenuContent(HTMLElement) {
    battleMenu.innerHTML = ''
    battleMenu.append(HTMLElement)
}
