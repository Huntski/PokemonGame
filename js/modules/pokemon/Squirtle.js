import {Pokemon} from "./Pokemon.js"
import {Tackle} from "../moves/Tackle.js"
import {WaterPulse} from "../moves/WaterPulse.js"

export class Squirtle extends Pokemon {
    name = 'Abra'
    type = 'dragon'
    cryFileSrc = 'sounds/cries/squirtle.mp3'

    abilities = [
        new Tackle,
        new WaterPulse,
    ]

    characterFromFront = 'img/pokemon/squirtle-front.png'
    characterFromBack = 'img/pokemon/squirtle-back.png'
}

