import {sleep} from "../../../script.js"
import {setBattleMenuContent} from "./BattleMenu.js"

export async function showMessage(message) {
    const messageMenu = document.createElement('div')

    messageMenu.classList.add('message-menu')

    setBattleMenuContent(messageMenu)

    const wordsInMessage = message.split(' ')

    for (let i = 0; i < wordsInMessage.length; i++) {
        messageMenu.innerHTML += wordsInMessage[i] + ' '
        await sleep(50)
    }

    await sleep(1000)

    return messageMenu
}
