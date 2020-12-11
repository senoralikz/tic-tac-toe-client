'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../lib/get-form-fields.js')

let value = 'X'

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onFailure)
}

const onNewGame = function (event) {
  event.preventDefault()

  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onFailure)
}

const onUserMove = function (event) {
  event.preventDefault()

  const index = $(event.target).data('cellIndex')

  let gameData

  if ($(event.target).html() === '') {
    $(event.target).html(`<h3>${value}</h3>`)

    gameData = {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: false
      }
    }

    if (value === 'X') {
      value = 'O'
    } else {
      value = 'X'
    }
  } else {
    $('#cell-occupied').html('<p>Tile is already taken. Select another tile.</p>').delay(2000).fadeOut('slow')
  }

  console.log(gameData.game.cell.value)

  api.updateGame(gameData)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  onUserMove
}
