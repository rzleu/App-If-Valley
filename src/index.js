// index.js
import './style.css';
import Protagonist from './classes/player'


const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 75
canvas.height = window.innerHeight - 700

const keys = []

const youngChris = new Protagonist(ctx, keys)
console.log(youngChris);
// youngChris.animate()

window.addEventListener('keydown', e => {
  keys[e.key] = true
})

window.addEventListener('keyup', e => {
  delete keys[e.key]
})

