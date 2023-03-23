import {Move} from "./Move.js"

export class Tackle extends Move {
    name = 'Tackle'
    damage = 5

    animation = async (pokemon) => {
        await pokemon.element.animate([
            {transform: `translate(0)`},
            {transform: `translate(-40px)`},
            {transform: `translate(50px)`},
            {transform: `translate(0)`}
        ], {
            duration: 400,
        }).finished
    }

    animationFromOpponent = async (pokemon) => {
        await pokemon.element.animate([
            {transform: `translate(0)`},
            {transform: `translate(40px)`},
            {transform: `translate(-50px)`},
            {transform: `translate(0)`}
        ], {
            duration: 400,
        }).finished
    }
}
