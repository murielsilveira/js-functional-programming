'use strict'
/*
 * Composition over Inheritance
 * https://www.youtube.com/watch?v=wfMtDGfHWpA
 */

const barker = (state) => ({
  bark: () => console.log('Woof, I am a ' + state.name)
})
barker({name: 'Cevada'}).bark()

const driver = (state) => ({
  drive: () => {
    state.position = state.position + state.speed
    console.log('Current position:', state.position)
  }
})

const killer = (state) => ({
  kill: () => console.log('hihihiih')
})

const murderRobotDog = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0
  }

  return Object.assign(
    {},
    barker(state),
    driver(state),
    killer(state)
  )
}

const mrd = murderRobotDog('MRD')
mrd.bark()
mrd.drive()
mrd.kill()
mrd.drive()
