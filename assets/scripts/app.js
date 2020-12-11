'use strict'

const authEvents = require('./events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.authenticated').hide()

  $('#sign-up').on('submit', authEvents.onSignUp)

  $('#sign-in').on('submit', authEvents.onSignIn)

  $('#change-password').on('submit', authEvents.onChangePassword)

  $('#sign-out').on('click', authEvents.onSignOut)

  $('#new-game').on('click', authEvents.onNewGame)

  $('#cell0').on('click', authEvents.onUserMove)

  $('#cell1').on('click', authEvents.onUserMove)

  $('#cell2').on('click', authEvents.onUserMove)

  $('#cell3').on('click', authEvents.onUserMove)

  $('#cell4').on('click', authEvents.onUserMove)

  $('#cell5').on('click', authEvents.onUserMove)

  $('#cell6').on('click', authEvents.onUserMove)

  $('#cell7').on('click', authEvents.onUserMove)

  $('#cell8').on('click', authEvents.onUserMove)
})
