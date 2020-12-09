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
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('Successfully changed password!')
  $('#change-password').trigger('reset')
}

const onFailure = function (error) {
  $('#message').text('Failed with error: ' + error.responseJSON.message)
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onFailure
}
