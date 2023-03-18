import {playerUseMove} from "../BattleEvents.js"
import {setBattleMenuContent} from "./BattleMenu.js"
import {currentPlayerPokemon} from "../PokemonEvents.js"

export let fightMenu = null
let abilityStatusElement = null

export function showFightMenu() {
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
            playerUseMove(ability)
        }

        abilityButton.onmouseleave = emptyStatus

        abilityButton.onmouseenter = () => {
            showMoveStatus(ability)
        }

        abilityOptions.append(abilityButton)
    })

    setBattleMenuContent(fightMenu)
}

function showMoveStatus(ability) {
    abilityStatusElement.innerHTML = `
        <p>${ability.currentPP}/${ability.pp}</p>
        <p>${ability.type}</p>
    `
}

function emptyStatus() {
    abilityStatusElement.innerHTML = ''
}
