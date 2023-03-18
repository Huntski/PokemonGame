let defaultVolume = 0.5
const sounds = {}
const music = {}

export function stopMusic() {
    for (let key in music) {
        music[key].pause()
        music[key].currentTime = 0
    }
}

export function playBattleMusic() {
    stopMusic()

    if (music['battleMusic'] === undefined) {
        music['battleMusic'] = createSoundElement("sounds/black&white_trainer-music.mp3")
    }

    music['battleMusic'].setAttribute("loop", '')
    music['battleMusic'].play()
}

export function playPokemonLowMusic() {
    if (music['lowMusic'] === undefined) {
        music['lowMusic'] = createSoundElement("sounds/black&white_low-music.mp3")
    }

    if (music['lowMusic'].paused) {
        stopMusic()
        music['lowMusic'].setAttribute("loop", '')
        music['lowMusic'].play()
    }
}

export function menuSoundEffect() {
    if (sounds['selectMenu'] === undefined) {
        sounds['selectMenu'] = createSoundElement("sounds/menubutton-select-sound.mp3")
    }

    sounds['selectMenu'].play()
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
