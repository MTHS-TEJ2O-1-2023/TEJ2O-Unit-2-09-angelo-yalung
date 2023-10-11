/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo Yalung
 * Created on: Oct 2023
 * This program does rock paper scissors, keeps the score and wipes the score 
*/

basic.clearScreen()
basic.pause(1000)

// variables
let randomNumber: number
let score: number = 0

input.onButtonPressed(Button.A, function () {
  score = score + 1
})

input.onButtonPressed(Button.B, function () {
  basic.showNumber(score)
})

input.onGesture(Gesture.Shake, function() {
  // the dice roll
  randomNumber = randint(1, 3)
  basic.clearScreen()

  // rock
    if (randomNumber === 1) {
    basic.showLeds(`
  . . . . .
  . # # # .
  . # # # .
  . # # # .
  . . . . .
  `)
  basic.pause(1000)
  }

  // paper
    if (randomNumber === 2) {
    basic.showLeds(`
  # # # # #
  # . . . #
  # . . . #
  # . . . #
  # # # # #
  `)
  basic.pause(1000)
  }

  // scissors
    if (randomNumber === 3) {
    basic.showLeds(`
  # # . . .
  # # . # #
  . # # # .
  # # . # #
  # # . . .
  `)
  basic.pause(1000)
  }
})
