import {Pokemon} from "./Pokemon.js"
import {Tackle} from "../moves/Tackle.js"
import {WaterPulse} from "../moves/WaterPulse.js"

export class Dratini extends Pokemon {
    name = 'Dratini'
    type = 'dragon'
    cryFileSrc = 'sounds/cries/dratini-cry.mp3'

    abilities = [
        new Tackle,
        new WaterPulse,
    ]

    characterFromFront = 'img/pokemon/dratini-front.png'
    characterFromBack = 'img/pokemon/dratini-back.png'
}

