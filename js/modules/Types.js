/**
 * Shown information gathered from:
 * https://outsidergaming.com/pokemon-normal-pokemon-weaknesses/
 */
export default {
    normal: {
        strong: [],
        weak: ['fighting', 'ghost', 'steel']
    },

    water: {
        strong: ['ground', 'rock', 'fire'],
        weak: ['electric', 'grass', 'fighting', 'water'],
    },

    fire: {
        strong: ['bug', 'steel', 'grass', 'ice'],
        weak: ['water', 'fighting', 'ground', 'rock'],
    },

    grass: {
        strong: ['ground', 'rock', 'water'],
        weak: ['flying', 'poison', 'bug', 'steel', 'fire', 'dragon'],
    },

    dragon: {
        strong: ['dragon'],
        weak: ['ice', 'fighting', 'dragon', 'fairy'],
    },

    flying: {
        strong: ['dragon'],
        weak: ['electric', 'ice', 'rock'],
    },
}
