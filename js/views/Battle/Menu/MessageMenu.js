import {sleep} from "../../../script.js"
import {setBattleMenuContent} from "./BattleMenu.js"

export async function showMessage(message) {
    const messageMenu = document.createElement('div')

    messageMenu.classList.add('message-menu')

    setBattleMenuContent(messageMenu)

    const wordsInMessage = message.split(' ')

    for (let index in wordsInMessage) {
        messageMenu.innerHTML += wordsInMessage[index] + ' '
        await sleep(50)
    }

    await sleep(1000)

    return messageMenu
}
