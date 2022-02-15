import Animal from "./animal.class.js";

export default class Crocodile extends Animal {
  constructor(name, sound, color) {
    super(name, sound);
    this.color = color;
  }

  swim() {
    return console.log("I am a crocodile and I swim");
  }
}
