import detectMotion from '../index.js'

const currentTheme = document.querySelector('#currentMotionPref')
const doc = document.documentElement

// detect updates
window.addEventListener('reducedMotionUpdated', (e) => {
  if (e.detail.reduce) {
    currentTheme.innerHTML = 'reduce'
    doc.classList.add('reduce-motion')
  } else {
    currentTheme.innerHTML = "no-preference"
    doc.classList.remove('reduce-motion')
  }
})

detectMotion.watch()