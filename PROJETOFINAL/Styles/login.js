'use strict'

const loginContainer = document.getElementById('logcontainer')

const moveOverlay = () => loginContainer.classList.toggle('move')

document.getElementById('cadastrar').addEventListener('click', moveOverlay)
document.getElementById('logar').addEventListener('click', moveOverlay)
