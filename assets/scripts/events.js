'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../lib/get-form-fields.js')
const globals = require('./global')

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

  let emptySpace = true

  while (emptySpace === true) {
    if ($(event.target).html() === '') {
      $(event.target).html(`<h3>${globals.value}</h3>`)

      globals.gameData.game.cell.index = index
      globals.gameData.game.cell.value = globals.value

      $('#game-message').html('')
      emptySpace = false
    } else {
      $('#game-message').html('<p>Tile is already taken. Select another tile.</p>')
    }
  }

  // console.log(globals.gameData.game.cell.index)
  // console.log(globals.gameData.game.cell.value)

  api.updateGame(globals.gameData)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onFailure)
}

const onShowGames = function (event) {
  event.preventDefault()

  api.showGames()
    .then(ui.onShowGamesSuccess)
    .catch(ui.onFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  onUserMove,
  onShowGames
}
