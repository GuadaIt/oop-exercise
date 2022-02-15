import Lion from "./classes/lion.class.js";
import Crocodile from "./classes/crocodile.class.js";

const lion = new Lion("lion", "roar", true);
const crocodile = new Crocodile("crocodile", "grr", "green");

console.log({
  lion: lion.speak("I am a lion"),
  croco: crocodile.speak("I am a crocodile"),
});
