import Types from "../../modules/Types.js"

/**
 * Calculation of damage is taken from: https://bulbapedia.bulbagarden.net/wiki/Damage
 * @param attackingPokemon
 * @param targetedPokemon
 * @param ability
 * @returns {{damage, message: string}}
 */
export function calculateDamage(attackingPokemon, targetedPokemon, ability) {
    // let damage = ( ((2 * attackingPokemon.level) / 5 + 2) * ability.power * attackingPokemon.attack / targetedPokemon.defense ) / 50 + 2
    let message = ''

    let damage = (2 * attackingPokemon.level) / 5 + 2

    console.log(targetedPokemon.types, ability.type)

    for (let i = 0; i < targetedPokemon.types.length; i++) {
        console.log(Types[targetedPokemon.types[i]])
        if (Types[targetedPokemon.types[i]].weak.includes(ability.type)) {
            // Increase the damage if the targeted Pokémon is weak against the ability's type.
            damage = damage * 1.25
            message = 'It\'s super effective!'
        } else if (Types[targetedPokemon.types[i]].strong.includes(ability.type)) {
            // Half the damage if the targeted Pokémon is strong against the ability's type.
            damage = damage * 0.75
            message = 'Not very effective...'
        }
    }

    return {
        damage: damage,
        message: message
    }
}
