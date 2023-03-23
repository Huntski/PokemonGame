import Types from "../../modules/Types.js"

export function calculateDamage(pokemon, targetedPokemon, ability) {
    let damage = ability.getMoveDamage(pokemon.level)
    let message = ''

    if (Types[targetedPokemon.type].weak.includes(ability.type)) {
        // Increase the damage if the targeted Pokémon is weak against the ability's type.
        damage = damage * 2
        message = 'It\'s super effective!'
    } else if (Types[targetedPokemon.type].strong.includes(ability.type)) {
        // Half the damage if the targeted Pokémon is strong against the ability's type.
        damage = damage / 2
        message = 'Not very effective...'
    }

    return {
        damage: damage,
        message: message
    }
}
