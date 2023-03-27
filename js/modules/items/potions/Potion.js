import {Item} from "../Item.js"
import {player} from "../../../store/player.js"
import {battle} from "../../../store/battle.js"
import {updatePlayerPokemonHealth} from "../../../views/Battle/StatusCard/PokemonStatus.js"
import {opponentTurn} from "../../../views/Battle/TrainerTurns.js"
import {checkWhichMusicToPlay, healSoundEffect} from "../../../music.js"

export class Potion extends Item {
    name = 'Potion'
    healAmount = 25

    async useItem() {
        const pokemon = player.getters['getPokemon']

        if (pokemon.damageTaken === 0) {
            await battle.dispatch('message', `${pokemon.name} is already full health.`)
            await battle.dispatch('startMenu')
        } else {
            const healedAmount = pokemon.heal(this.healAmount)
            await battle.dispatch('message', `Healed ${pokemon.name} for ${healedAmount} HP.`)
            healSoundEffect()
            await updatePlayerPokemonHealth()
            checkWhichMusicToPlay()
            await opponentTurn()
        }

        this.removeAmount()
    }
}
