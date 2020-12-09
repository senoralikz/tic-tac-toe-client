'use strict'

const onSignUpSuccess = function (response) {
  $('#message').text('Signed Up Successfully!')
  $('#sign-up').trigger('reset')
}

const onFailure = function (error) {
  $('#message').text('Failed with error: ' + error.responseJSON.message)
}

module.exports = {
  onSignUpSuccess,
  onFailure
}
