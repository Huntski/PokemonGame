import {playerUseMove} from "../BattleEvents.js"
import {setBattleMenuContent} from "./BattleMenu.js"
import {menuSoundEffect} from "../../../music.js"
import {player} from "../../../store/player.js"
import {battle} from "../../../store/battle.js"

export function showFightMenu() {
    const fightMenu = document.createElement('div')

    fightMenu.classList.add('fight-menu')

    fightMenu.innerHTML = `
        <div class="ability-options"></div>
        
        <div class="right-menu">
            <p class="ability-status"></p>
            <button class="cancel-button">CANCEL</button>
        </div>`

    const abilityOptions = fightMenu.querySelector('.ability-options')
    const abilityStatusElement = fightMenu.querySelector('.ability-status')
    const cancelButton = fightMenu.querySelector('.cancel-button')

    cancelButton.onclick = () => {
        menuSoundEffect()
        battle.dispatch('startMenu').then(r => r)
    }

    player.getters['getPokemon'].abilities.forEach(ability => {
        const abilityButton = document.createElement('button')

        abilityButton.textContent = ability.name

        abilityButton.onclick = () => {
            menuSoundEffect()
            playerUseMove(ability)
        }

        abilityButton.onmouseleave = () => {
            abilityStatusElement.innerHTML = ''
        }

        abilityButton.onmouseenter = () => {
            updateStatusElement(ability, abilityStatusElement)
        }

        abilityOptions.append(abilityButton)
    })

    setBattleMenuContent(fightMenu)

    return fightMenu
}

function updateStatusElement(ability, element) {
    element.innerHTML = `
        <p>${ability.currentPP}/${ability.pp}</p>
        <p>${ability.type}</p>`
}
