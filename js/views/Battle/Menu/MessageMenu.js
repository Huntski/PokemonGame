import {battleMenu} from "../Battle.js"
import {sleep} from "../../../script.js"

export let messageMenu = null

export async function showMessageMenu(message = '', instant = false) {
    battleMenu.innerHTML = ''

    await sleep(400)

    messageMenu = document.createElement('div')

    messageMenu.classList.add('message-menu')

    battleMenu.append(messageMenu)

    const wordsInMessage = message.split(' ')

    for (let i = 0; i < wordsInMessage.length; i ++) {
        messageMenu.innerHTML += wordsInMessage[i] + ' '
        await sleep(50)
    }

    return sleep(1000)
}
