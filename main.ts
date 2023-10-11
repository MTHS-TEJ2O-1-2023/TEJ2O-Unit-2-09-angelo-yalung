/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo Yalung
 * Created on: Oct 2023
 * This program does rock paper cissors, keeps the score and wipes the score 
*/

basic.clearScreen()
basic.pause(1000)

// variables
let randomNumber: number
let score: number

input.onGesture(Gesture.Shake, function() {
  randomNumber = randint(1,3)

 // rock
  if (randomNumber = 1) {
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
  if (randomNumber = 2) {
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
  if (randomNumber = 3) {
  basic.showLeds(`
  # # . . .
  # # . # #
  . # # # .
  # # . # #
  # # . . .
  `)
  basic.pause(1000)
  }

  input.onButtonPressed(Button.A, function () {
  score = score + 1
  basic.showNumber(score)
  })

  input.onButtonPressed(Button.B, function () {
  score = 0
  basic.showNumber(score)
})
})