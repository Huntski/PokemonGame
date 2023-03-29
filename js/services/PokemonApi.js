import {Pokemon} from "../modules/pokemon/Pokemon.js"
import {Move} from "../modules/moves/Move.js"
import {addRequest} from "../views/Battle/Loading.js"

const API_BASE_URL = 'https://pokeapi.co/api/v2'

export async function getRandomPokemon() {
    // Get random PokemonId from 1 to 150
    const randomPokemonId = Math.floor(Math.random() * (150 + 1) + 1)
    const randomLevel = Math.floor(Math.random() * (40 - 30 + 1) + 30)

    const pokemonDetails = await getPokemonDetails(randomPokemonId)

    addRequest()

    const types = []

    pokemonDetails.types.forEach(type => {
        types.push(type.type.name)
    })

    const moves = []

    for (let i = 0; i < 4; i++) {
        const randomMoveIndex = Math.floor(Math.random() * pokemonDetails.moves.length)

        const newMove = await getMove(pokemonDetails.moves[randomMoveIndex].move.url)

        moves.push(new Move({
            id: newMove.id,
            name: newMove.name,
            damage: newMove.power,
            pp: newMove.pp,
            type: newMove.type
        }))
    }

    return new Pokemon({
        id: randomPokemonId,
        level: randomLevel,
        name: pokemonDetails.name,
        characterFromBack: pokemonDetails.spriteBack,
        characterFromFront: pokemonDetails.spriteFront,
        abilities: moves,
        health: pokemonDetails.hp,
        attack: pokemonDetails.attack,
        defense: pokemonDetails.defense,
        speed: pokemonDetails.speed,
        types: types,
    })
}

export async function getPokemonDetails(id) {
    try {
        const result = await fetch(`${API_BASE_URL}/pokemon/${id}`).then(response => response.json())

        const stats = {}

        result.stats.forEach(stat => {
            stats[stat.stat.name] = stat.base_stat
        })

        return {
            name: result.name,
            moves: result.moves,
            spriteBack: result.sprites['back_default'],
            spriteFront: result.sprites['front_default'],
            health: stats.hp,
            attack: stats.attack,
            defense: stats.defense,
            speed: stats.speed,
            types: result.types
        }
    } catch (e) {
        console.log(e)
    }
}

export async function getMove(url) {
    try {
        const result = await fetch(url).then(response => response.json())

        return {
            id: result.id,
            name: result.name,
            power: result.power,
            pp: result.pp,
            type: result.type.name
        }
    } catch (e) {
        console.log(e)
    }
}
