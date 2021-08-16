// utils.js

export function isCollide(a, b) {
  return !(
    ((a.y + a.height) < (b.y)) ||
    (a.y > (b.y + b.height)) ||
    ((a.x + a.width) < b.x) ||
    (a.x > (b.x + b.width))
  );
}

export function scale(canvas) {
  const scaleX = window.innerWidth / canvas.width
  const scaleY = window.innerHeight / canvas.height
  const scaleToFit = Math.min(scaleX, scaleY)
  stage.style.transformOrigin = '40% 60%' //scale from top left
  stage.style.transform = 'scale(' + scaleToFit + ')'
}
