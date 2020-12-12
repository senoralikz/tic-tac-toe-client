'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../lib/get-form-fields.js')

let value = 'X'
const gameData = {
  game: {
    cell: {
      index: null,
      value: null
    },
    over: false
  }
}

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

  if ($(event.target).html() === '') {
    $(event.target).html(`<h3>${value}</h3>`)

    gameData.game.cell.index = index
    gameData.game.cell.value = value

    if (value === 'X') {
      value = 'O'
    } else {
      value = 'X'
    }
    $('#cell-occupied').html('')
  } else {
    $('#cell-occupied').html('<p>Tile is already taken. Select another tile.</p>')
  }

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
  onUserMove,
  gameData
}
