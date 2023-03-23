import {battleMenu} from "../BattleSequence.js"

export function setBattleMenuContent(HTMLElement) {
    battleMenu.innerHTML = ''
    battleMenu.append(HTMLElement)
}
