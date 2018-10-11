// class  语法
class Animal {
    name() {
        return "Aniaml"
    }
    say () {
        return `I'm ${this.name()}`
    }
}

class Dog extends Animal {
    food='noodle';
    name() {
        return 'Dog'
    }
}

console.log(new Dog() instanceof Animal) // true