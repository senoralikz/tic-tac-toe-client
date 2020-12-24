'use strict'

const store = require('./store')
const globals = require('./global')

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

  $('#user-turn').text('')
  $('#game-message').html('')
  $('#display-games').html('')

  $('.unauthenticated').show()
  $('.authenticated').hide()
  $('#game-board div').hide()
}

const onNewGameSuccess = function (response) {
  $('#message').text('Started New Game!')
  // $('#message').delay(2000).fadeOut('slow')
  $('#game-board div').show()
  $('#game-board div').html('')
  $('#game-message').html('')
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
    $('#game-message').html(`<p>Game Over! ${globals.value} Wins!`)
    $('#game-board').addClass('inactive')
  } else {
    if (store.game.cells.every(value => value !== '') === true) {
      $('#game-message').html('<p>Game Over! It\'s a draw!</p>')
      $('#game-board').addClass('inactive')
      globals.gameData.game.over = true
      store.game.over = true
    } else if (globals.value === 'X') {
      globals.value = 'O'
      $('#user-turn').text(globals.value + '\'s turn')
    } else {
      globals.value = 'X'
      $('#user-turn').text(globals.value + '\'s turn')
    }
  }
  // console.log(store.game)
  // console.log(globals.gameData)
}

const onFailure = function (error) {
  $('#message').text('Failed with error: ' + error.responseJSON.message)
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
  onFailure
}
