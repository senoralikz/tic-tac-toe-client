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

const onFailure = function (error) {
  $('#message').text('Failed with error: ' + error.responseJSON.message)
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onFailure
}
