'use strict'
/*
 * Factory Functions
 * https://www.youtube.com/watch?v=ImwrezYhw4w
 */

class Dog {
  constructor() {
    this.sound = 'woof'
  }
  talk() {
    console.log(this.sound)
  }
}
const sniffles = new Dog()
sniffles.talk()


const dog = () => {
  const sound = 'wooooooof'

  return {
    talk: () => console.log(sound)
  }
}
const cevada = dog()
cevada.talk()
