'use strict'

const getFormFields = require('./../../lib/get-form-fields.js')

const onSignUp = function () {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)
  console.log('successfully signed up')
  console.log(data)

  // api.signUp(data)
  //   .then(ui.OnSignUpSuccess)
  //   .catch(ui.onFailure)
}

module.exports = {
  onSignUp
}
