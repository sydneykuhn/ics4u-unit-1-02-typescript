/**
 * The program calculates the amount of energy an object
 *   moving at the speed of light can produce in joules
 *
 * By: Sydney Kuhn
 * Version: 1.0
 * Since:   2022-09-16
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()
const speedOfLight = 2.998 * 10 ** 8

const objectWeightString = prompt('Enter the objects mass in kilograms : ')
const objectWeight = parseFloat(objectWeightString)

// calculate the amount of energy in joules
const energy = objectWeight * (speedOfLight ** 2)

if (!isNaN(objectWeight)) {
  console.log(
    `A ${objectWeight}kg object will produce ${energy} joules of energy.`
  )
} else {
  console.log('Invalid Input Entered.')
}

console.log('\nDone.')
