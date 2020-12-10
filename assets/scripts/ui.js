'use strict'

const store = require('./store')

const onSignUpSuccess = function (response) {
  $('#message').text('Signed Up Successfully!')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (response) {
  $('#message').text('Signed In Successfully!')
  $('#sign-in').trigger('reset')

  store.user = response.user

  $('.unauthenticated').hide()
  $('.authenticated').show()
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('Successfully changed password!')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#message').text('Signed Out Successfully!')

  store.user = null

  $('.unauthenticated').show()
  $('.authenticated').hide()
}

const onNewGameSuccess = function () {
  $('#message').text('Started New Game!')
  $('#user-turn').text('Player X Turn')
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
  onFailure
}
