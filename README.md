# Tic-Tac-Toe

### Description

Simple tic-tac-toe game. Create account to keep track of games played. To test the app use the credentials below:  
EMAIL: test@testing.com  
PASSWORD: 123456

### Technologies Used

- JavaScript
- HTML
- SCSS
- jQuery
- AJAX
- Shell

### Development Process

The goal of the application is to be able to perform the following:

- Have a new user sign up
- Have an existing user sign in
- Have user be able to start a new game
- Have user start the game as 'X' and then switch between 'X' and 'O' after each turn
- Only make empty spaces available to select
- Notify user when a win, loss, or tie occurs,
- When a game is over nothing else can be added to the board
- User must be able to see how many games they played
- Unauthenticated user can not have access to authenticated functions such as change password or start new game
- Have all forms clear on submit success

The application also deals with an API. Below are requests I made to ensure the API was functioning properly:

- POST /sign-up (sign up new user)
- POST /sign-in (sign in existing user)
- PATCH /change-password (change users password)
- DELETE /sign-out (sign out user)
- POST /games (create a new game)
- GET /games (view number of games user played)

Whenever I was stuck on a requirement I would check the terminal or browser console for the error message and head to the line of code specified and work my way back while console logging to find the code that is not performing how I expected and then proceed to correct it.

### Unsolved Problems

- Styling
- View last 5 games played

### Wireframe and User Stories

![alt text](https://i.imgur.com/dhqsEat.png "Wireframe for Tic-Tac-Toe Project")

1. As a video game user I would like to know how many games I won so I can know if I need to improve.
2. As an efficiency user I would like to know how many moves I took every game so I can try to win in the least amount of moves as possible.
3. As a video game user I would like to sign in so I can have my own profile.
4. As a video game user I would like to have my own profile to try and track my stats.
