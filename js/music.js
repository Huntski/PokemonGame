import {player} from "./store/player.js"

let defaultVolume = 0.5
const sounds = {}
const music = {}

export function checkWhichMusicToPlay() {
    if (player.getters['getPokemon'].isLow) {
        playPokemonLowMusic()
    } else {
        playBattleMusic()
    }
}

export function stopMusic() {
    for (let key in music) {
        music[key].pause()
        music[key].currentTime = 0
    }
}

export function playBattleMusic() {
    if (music['battleMusic'] === undefined) {
        music['battleMusic'] = createSoundElement("sounds/black&white_trainer-music.mp3")
        music['battleMusic'].setAttribute("loop", '')
    }

    if (music['battleMusic'].paused) {
        stopMusic()
        music['battleMusic'].play()
    }
}

export function playPokemonLowMusic() {
    if (music['lowMusic'] === undefined) {
        music['lowMusic'] = createSoundElement("sounds/black&white_low-music.mp3")
        music['lowMusic'].setAttribute("loop", '')
    }

    if (music['lowMusic'].paused) {
        stopMusic()
        music['lowMusic'].play()
    }
}

export function menuSoundEffect() {
    // Sound effect source: https://www.youtube.com/watch?v=5UHmxWsPNzg
    if (sounds['selectMenu'] === undefined) {
        sounds['selectMenu'] = createSoundElement("sounds/Pokemon (A Button) - Sound Effect (HD).mp3")
    }

    sounds['selectMenu'].currentTime = 0
    sounds['selectMenu'].play()
}

export function healSoundEffect() {
    // Sound effect source: https://www.youtube.com/watch?v=Dzav9wcsPP8 - at 24 seconds
    if (sounds['heal'] === undefined) {
        sounds['heal'] = createSoundElement("sounds/Heal sound effect.mp3")
    }

    sounds['heal'].currentTime = 0
    sounds['heal'].play()
}

export function pokeballOpenSoundEffect() {
    // Sound effect source: https://www.youtube.com/watch?v=Dzav9wcsPP8 - at 54 seconds
    if (sounds['heal'] === undefined) {
        sounds['heal'] = createSoundElement("sounds/Pokebal open sound .mp3")
    }

    sounds['heal'].currentTime = 0
    sounds['heal'].play()
}

export function takeDamageSoundEffect() {
    if (sounds['takeDamage'] === undefined) {
        sounds['takeDamage'] = createSoundElement("sounds/take-damage-sound-effect.mp3")
    }

    sounds['takeDamage'].play()
}

export function pokemonCry(src) {
    if (sounds['cry'] === undefined) {
        sounds['cry'] = createSoundElement(src)
    } else {
        sounds['cry'].src = src
    }

    sounds['cry'].play()
}

/**
 * Create audio element.
 * @param audioSrc
 * @returns {HTMLAudioElement}
 */
function createSoundElement(audioSrc) {
    const audioElement = document.createElement("audio")

    audioElement.src = audioSrc
    audioElement.setAttribute("preload", "auto")
    audioElement.setAttribute("controls", "none")
    audioElement.style.display = "none"
    audioElement.volume = defaultVolume
    document.body.appendChild(audioElement)

    return audioElement
}
