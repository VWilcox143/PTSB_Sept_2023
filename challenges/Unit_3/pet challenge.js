class Pet {
    constructor(name, color, type) {
        this.name = name;
        this.color = color;
        this.type = type
    }

    speak() {
    return `${this.name} says, ${this.voice}`
    }

    fly() {
        if (this.flies === true) {
            return `${this.name}, the ${this.color} ${this.type}, ${this.voice}s and takes to the skies!`;
        } else {
            return `${this.name}, the ${this.color} ${this.type}, ${this.voice}s and can only gaze upward...`;
        }


    }
}

class Dog extends Pet {
    constructor(name, color, voice, type) {
        super(name, color, type);
        this.voice = voice;
        
    }
}

let buttons = new Dog('Buttons', 'brown', 'ruff', 'lab');

class Cat extends Pet {
    constructor(name, color, voice, type) {
        super(name, color, type);
        this.voice = voice;
    }
}

let mayo = new Cat('Mayo', 'black', 'mew', 'cat');

class Bird extends Pet {
    constructor(name, color, voice, type) {
        super(name, color, type)
        this.voice = voice;
        this.flies = true;
    }
}
let rex = new Dog ('Rex', 'white', 'arf', 'corgi')
let rocco = new Bird('Rocco', 'black', 'sqwawk', 'toucan');
let tweety = new Bird('Tweety', 'yellow', 'tweets', 'canary') 
console.log(rocco.fly());
console.log(mayo.fly());
console.log(rex.fly());
console.log(buttons.fly());
console.log(tweety.fly());