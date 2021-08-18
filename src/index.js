// index.js
import './styles/index.css';
import './styles/reset.css'

import Game from './classes/game'
import { playList } from './utils/utils';

import youngChris from './assests/characters/chris.png'
import office1 from './assests/backgrounds/Office_Design_1.png'


// ==================================
// preload images
// ==================================
const images = []

function preload(...urls) {
  for (let i = 0; i < urls.length; i++) {
    images[i] = new Image()
    images[i].src = urls[i]
  }
}

preload(
  youngChris,
  office1
)

//==============================
// main logic
//==============================
document.addEventListener("DOMContentLoaded", () => {
  // background
  const background = document.getElementById('backgroundLayer')
  // scale(canvas)
  const game = new Game()

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      const dialogue = document.getElementById('dialogue')
      dialogue.classList.add('hide')
      background.classList.remove('hide')
      game.togglePause()
      game.play()
      playList()
    }
  })
  
  
});