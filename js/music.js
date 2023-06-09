import {player} from "./store/player.js"

let defaultVolume = 0.1
const sounds = {}
const music = {}

export function checkWhichMusicToPlay() {
    if (player.getters['getPokemon'].isLow && !player.getters['getPokemon'].fainted) {
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

export function playWinMusic() {
    if (music['winMusic'] === undefined) {
        music['winMusic'] = createSoundElement("sounds/winmusic.mp3")
        music['winMusic'].setAttribute("loop", '')
    }

    if (music['winMusic'].paused) {
        stopMusic()
        music['winMusic'].play()
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
    if (sounds['selectMenu'] === undefined) {
        sounds['selectMenu'] = createSoundElement("sounds/menu/BW2MenuSelect.wav")
    }

    sounds['selectMenu'].currentTime = 0
    sounds['selectMenu'].play()
}

export function healSoundEffect() {
    if (sounds['heal'] === undefined) {
        sounds['heal'] = createSoundElement("sounds/Heal sound effect.mp3")
    }

    sounds['heal'].currentTime = 0
    sounds['heal'].play()
}

export function pokeballOpenSoundEffect() {
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

export function pokemonCry(fileName) {
    const path = `sounds/cries/${fileName}`

    if (sounds['cry'] === undefined) {
        sounds['cry'] = createSoundElement(path)
    } else {
        sounds['cry'].src = path
    }

    sounds['cry'].play()
}

/**
 * Create audio element.
 * @param audioSrc
 * @returns {HTMLAudioElement}
 */
function createSoundElement(audioSrc) {
    const audioElement = new Audio(audioSrc)
    audioElement.setAttribute("preload", "auto")
    audioElement.volume = defaultVolume
    document.body.appendChild(audioElement)

    return audioElement
}
