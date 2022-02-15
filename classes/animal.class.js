export default class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak(string) {
    return string.split(" ").reduce((str, word) => {
      return str + word + ` ${this.sound} `;
    }, "");
  }
}
