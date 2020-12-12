'use strict'

const store = require('./store')

const onSignUpSuccess = function (response) {
  $('#message').text('Signed Up Successfully!')
  // $('#message').delay(2000).fadeOut('slow')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (response) {
  $('#message').text('Signed In Successfully!')
  // $('#message').delay(2000).fadeOut('slow')
  $('#sign-in').trigger('reset')

  store.user = response.user

  $('.unauthenticated').hide()
  $('.authenticated').show()
  $('#game-board').hide()
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('Successfully changed password!')
  // $('#message').delay(2000).fadeOut('slow')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#message').text('Signed Out Successfully!')
  // $('#message').delay(2000).fadeOut('slow')

  store.user = null

  $('.unauthenticated').show()
  $('.authenticated').hide()
}

const onNewGameSuccess = function (response) {
  $('#message').text('Started New Game!')
  // $('#message').delay(2000).fadeOut('slow')
  $('#game-board').show()
  store.game = response.game
}

const onUpdateGameSuccess = function (response) {
  store.game = response.game
  console.log(store.game)
  // $('#user-turn').text(value + '\'s turn')
}

const onFailure = function (error) {
  $('#message').text('Failed with error: ' + error.responseJSON.message)
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onNewGameSuccess,
  onUpdateGameSuccess,
  onFailure
}
