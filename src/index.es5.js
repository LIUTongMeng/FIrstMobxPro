class Animal{
    name() {
        return 'Animal'
    }
    say() {
        return `i am ${this.name()}`
    }
}

class Dog extends Animal {
    food='food'
    name() {
        return 'Dog'
    }
}

document.write(new Dog instanceof Animal)