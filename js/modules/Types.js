/**
 * Shown information gathered from:
 * https://outsidergaming.com/pokemon-normal-pokemon-weaknesses/
 */
export default {
    normal: {
        strong: [],
        weak: ['fighting', 'steel']
    },

    water: {
        strong: ['fire', 'water', 'ice', 'steel', 'ghost'],
        weak: ['electric', 'grass', 'fighting'],
    },

    fire: {
        strong: ['fire', 'grass', 'ice', 'bug', 'steel', 'fairy', 'ghost'],
        weak: ['water', 'fighting', 'ground', 'rock'],
    },

    grass: {
        strong: ['water', 'electric', 'grass', 'ground', 'ghost'],
        weak: ['fire', 'ice', 'fighting', 'poison', 'flying', 'bug'],
    },

    dragon: {
        strong: ['fire', 'water', 'electric', 'grass', 'ghost'],
        weak: ['ice', 'fighting', 'dragon', 'fairy'],
    },

    flying: {
        strong: ['grass', 'bug', 'ghost', 'flying'],
        weak: ['electric', 'ice', 'rock'],
    },

    fighting: {
        strong: ['bug', 'rock', 'dark', 'ghost'],
        weak: ['fighting', 'flying', 'psychic', 'fairy'],
    },

    electric: {
        strong: ['electric', 'flying', 'steel', 'ghost'],
        weak: ['fighting', 'ground'],
    },

    ice: {
        strong: ['ice', 'ghost'],
        weak: ['ice', 'fighting', 'rock', 'steel'],
    },

    poison: {
        strong: ['grass', 'poison', 'bug', 'fairy', 'ghost'],
        weak: ['ground', 'psychic'],
    },

    ground: {
        strong: ['poison', 'rock', 'ghost', 'electric'],
        weak: ['ground', 'grass', 'ice', 'fighting'],
    },

    psychic: {
        strong: ['psychic', 'ghost'],
        weak: ['bug', 'dark'],
    },

    bug: {
        strong: ['grass', 'ground', 'ghost'],
        weak: ['fire', 'flying', 'rock'],
    },

    rock: {
        strong: ['normal', 'fire', 'poison', 'flying', 'ghost'],
        weak: ['water', 'grass', 'fighting', 'ground', 'steel'],
    },

    ghost: {
        strong: ['poison', 'bug', 'ghost', 'normal', 'fighting'],
        weak: ['dark'],
    },

    dark: {
        strong: ['dark', 'ghost', 'psychic'],
        weak: ['fighting', 'bug', 'fairy'],
    },

    steel: {
        strong: ['normal', 'grass', 'ice', 'flying', 'psychic', 'bug', 'rock', 'dragon', 'steel', 'fairy', 'ghost', 'poison'],
        weak: ['fire', 'fighting', 'ground'],
    },

    fairy: {
        strong: ['dragon'],
        weak: ['poison', 'steel'],
    },
}
