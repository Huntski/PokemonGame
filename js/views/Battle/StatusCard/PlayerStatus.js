import {playerStatus} from "../Battle.js"

export function showPlayerStatus() {
    playerStatus.innerHTML = `
        <div class="player-status"></div>`

    playerStatus.style.display = 'block'
}
