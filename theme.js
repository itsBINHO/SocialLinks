const prompt = require('prompt-sync')()

function toggleMode() {
  const html = document.documentElement

  html.classList.toggle('light')
}

