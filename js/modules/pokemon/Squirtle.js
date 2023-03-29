import {Pokemon} from "./Pokemon.js"

export class Squirtle extends Pokemon {
    name = 'Squirtle'
    type = 'water'
    cryFileSrc = 'sounds/cries/squirtle.mp3'

    abilities = [
        // new Tackle,
        // new WaterPulse,
    ]

    characterFromFront = 'img/pokemon/squirtle-front.png'
    characterFromBack = 'img/pokemon/squirtle-back.png'
}

