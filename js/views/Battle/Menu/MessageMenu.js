import {sleep} from "../../../script.js"
import {setBattleMenuContent} from "./BattleMenu.js"

export let messageMenu = null

export async function showMessageMenu(message = '', duration = 1000) {
    messageMenu = document.createElement('div')

    messageMenu.classList.add('message-menu')

    setBattleMenuContent(messageMenu)

    const wordsInMessage = message.split(' ')

    for (let i = 0; i < wordsInMessage.length; i++) {
        messageMenu.innerHTML += wordsInMessage[i] + ' '
        await sleep(50)
    }

    return sleep(duration)
}
