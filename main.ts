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
})

if (randomNumber = 1) {
  basic.showLeds(`
  . . . . .
  . # # # .
  . # # # .
  . # # # .
  . . . . .
  `)
}

if (randomNumber = 2) {
  basic.showLeds(`
  # # # # #
  # . . . #
  # . . . #
  # . . . #
  # # # # #
  `)
}

if (randomNumber = 3) {
    basic.showLeds(`
  # # . . .
  # # . # #
  . # # # .
  # # . # #
  # # . . .
  `)
}