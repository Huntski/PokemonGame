import {Pokemon} from "./Pokemon.js"
import {Tackle} from "../moves/Tackle.js"

export class Squirtle extends Pokemon {
    name = 'Squirtle'

    abilities = [
        new Tackle,
        new Tackle,
        new Tackle,
        new Tackle
    ]

    characterFromFront = 'img/pokemon/squirtle-front.png'
    characterFromBack = 'img/pokemon/squirtle-back.png'
}

