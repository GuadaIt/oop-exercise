import Animal from "./animal.class.js";

export default class Lion extends Animal {
  constructor(name, sound, lick) {
    super(name, sound);
    this.lick = lick;
  }

  lick() {
    if (this.lick) return console.log("lick");
  }
}
