'use strict'

const store = require('./store')
const globals = require('./global')

const onSignUpSuccess = function (response) {
  $('#message').html('<p>Signed Up Successfully!</p>')
  $('#message').fadeIn()
  $('#message').delay(2000).fadeOut('slow')
  $('#sign-up').trigger('reset')
  $('#sign-up-modal').modal('hide')
}

const onSignInSuccess = function (response) {
  $('#message').html('<p>Signed In Successfully!</p>')
  $('#message').fadeIn()
  $('#message').delay(2000).fadeOut('slow')
  $('#sign-in').trigger('reset')

  store.user = response.user

  $('#sign-in-modal').modal('hide')
  $('.unauthenticated').hide()
  $('.authenticated').show()
}

const onChangePasswordSuccess = function (response) {
  $('#message').html('<p>Successfully Changed Password!</p>')
  $('#message').fadeIn()
  $('#message').delay(2000).fadeOut('slow')
  $('#change-password').trigger('reset')
  $('#changePasswordModal').modal('hide')
}

const onSignOutSuccess = function () {
  $('#message').html('<p>Signed Out Successfully!</p>')
  $('#message').fadeIn()
  $('#message').delay(2000).fadeOut('slow')

  store.user = null

  $('#user-turn').text('')
  $('#move-message').html('')
  $('#display-games').html('')

  $('.unauthenticated').show()
  $('.authenticated').hide()
  $('#game-board').addClass('inactive')
  $('#game-board div').html('')
}

const onNewGameSuccess = function (response) {
  $('#message').html('<p>Started New Game!</p>')
  $('#message').fadeIn()
  $('#message').delay(2000).fadeOut('slow')
  $('#game-board div').show()
  $('#game-board div').html('')
  $('#move-message').html('')
  $('#game-board').removeClass('inactive')
  $('#game-board div').removeClass('occupied')
  store.game = response.game
  globals.value = 'X'
  globals.gameData.game.over = false
  // console.log(globals.gameData)
  // console.log(store.game)
  $('#user-turn').text(globals.value + '\'s turn')
}

const onShowGamesSuccess = function (response) {
  $('#display-games').html(response.games.length + ' Games Played!')
}

const onUpdateGameSuccess = function (response) {
  store.game = response.game
  checkWin()
  if (store.game.over === true) {
    $('#user-turn').html(`<p>Game Over! ${globals.value} Wins!`)
    $('#game-board').addClass('inactive')
  } else {
    if (store.game.cells.every(value => value !== '') === true) {
      $('#user-turn').html('<p>Game Over! It\'s a draw!</p>')
      $('#game-board').addClass('inactive')
      globals.gameData.game.over = true
      store.game.over = true
    } else if (globals.value === 'X') {
      globals.value = 'O'
      $('#user-turn').html(`<p>${globals.value}'s turn</p>`)
    } else {
      globals.value = 'X'
      $('#user-turn').html(`<p>${globals.value}'s turn</p>`)
    }
  }
  // console.log(store.game)
  // console.log(globals.gameData)
}

const onFailure = function (error) {
  $('#message').text('Failed with error: ' + error.responseJSON.message)
  $('#message').fadeIn()
  $('#message').delay(2000).fadeOut('slow')
}

const onModalFailure = function (error) {
  $('.modal-message').text('Failed with error: ' + error.responseJSON.message)
  $('.modal-message').fadeIn()
  $('.modal-message').delay(2000).fadeOut('slow')
}

const checkWin = function () {
  if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[1] && store.game.cells[0] === store.game.cells[2]) {
    globals.gameData.game.over = true
    store.game.over = true
  } else if (store.game.cells[3] !== '' && store.game.cells[3] === store.game.cells[4] && store.game.cells[3] === store.game.cells[5]) {
    globals.gameData.game.over = true
    store.game.over = true
  } else if (store.game.cells[6] !== '' && store.game.cells[6] === store.game.cells[7] && store.game.cells[6] === store.game.cells[8]) {
    globals.gameData.game.over = true
    store.game.over = true
  } else if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[3] && store.game.cells[0] === store.game.cells[6]) {
    globals.gameData.game.over = true
    store.game.over = true
  } else if (store.game.cells[1] !== '' && store.game.cells[1] === store.game.cells[4] && store.game.cells[1] === store.game.cells[7]) {
    globals.gameData.game.over = true
    store.game.over = true
  } else if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[5] && store.game.cells[2] === store.game.cells[8]) {
    globals.gameData.game.over = true
    store.game.over = true
  } else if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[4] && store.game.cells[0] === store.game.cells[8]) {
    globals.gameData.game.over = true
    store.game.over = true
  } else if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[4] && store.game.cells[2] === store.game.cells[6]) {
    globals.gameData.game.over = true
    store.game.over = true
  }
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onNewGameSuccess,
  onShowGamesSuccess,
  onUpdateGameSuccess,
  onFailure,
  onModalFailure
}
