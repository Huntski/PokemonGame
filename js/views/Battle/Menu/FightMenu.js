import {battleMenu, currentPlayerPokemon} from "../Battle.js"
import {playerUseAbility} from "../AttackEvents.js"

export let fightMenu = null
let abilityStatusElement = null

export function showFightMenu() {
    battleMenu.innerHTML = ''

    fightMenu = document.createElement('div')

    fightMenu.classList.add('fight-menu')

    fightMenu.innerHTML = `
            <div class="ability-options"></div>
            
            <div class="ability-status right-menu"></div>`

    const abilityOptions = fightMenu.querySelector('.ability-options')
    abilityStatusElement = fightMenu.querySelector('.ability-status')

    currentPlayerPokemon.abilities.forEach(ability => {
        const abilityButton = document.createElement('button')

        abilityButton.textContent = ability.name

        abilityButton.onclick = () => {
            playerUseAbility(ability)
        }

        abilityButton.onmouseleave = emptyStatus

        abilityButton.onmouseenter = () => {
            showMoveStatus(ability)
        }

        abilityOptions.append(abilityButton)
    })

    battleMenu.append(fightMenu)
}

function showMoveStatus(ability) {
    abilityStatusElement.innerHTML = `
        <p>${ability.currentPP}/20</p>
        <p>${ability.type}</p>
    `
}

function emptyStatus() {
    abilityStatusElement.innerHTML = ''
}
