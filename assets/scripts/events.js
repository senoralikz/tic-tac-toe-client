'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../lib/get-form-fields.js')

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

const onUserMove = function (userTurn) {
  event.preventDefault()

  const form = event.target

  const gameData = getFormFields(form)

  const oLetterHTML = (`
  <div>
    <p>O</p>
  </div>
  `)

  const xLetterHTML = (`
  <div>
    <p>X</p>
  </div>
  `)

  if ($('.cell').html() === null) {
    $('#user-turn').text('Tile already taken. Pick another tile.')
  } else {
    $('.cell').html(xLetterHTML)
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
  onUserMove
}
