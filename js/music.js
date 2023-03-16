let defaultVolume = 0
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

    music['battleMusic'].play()
}

export function playPokemonLowMusic() {
    stopMusic()

    if (music['lowMusic'] === undefined) {
        music['lowMusic'] = createSoundElement("sounds/black&white_low-music.mp3")
    }

    music['lowMusic'].play()
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
