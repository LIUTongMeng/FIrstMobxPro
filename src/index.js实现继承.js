function Animal() {}
function Dog() {}
Object.defineProperties(Animal.prototype, {
    name:{
        value() {
            return 'Animal'
        }
    }, 
    say:{
        value() {
            return `I'm ${this.name()}`
        }
    }
})

// dog._proto_.... === Animal.prototype
// 继承
// Dog.prototype = Object.create(Animal.prototype) //继承 
// document.write(new Dog() instanceof Animal) // true 
// document.write(new Dog().say()) // I'm Anamal 
// console.log(Dog.prototype.constructor) // Animal 
Dog.prototype = Object.create(Animal.prototype, {
    constructor:{
        value : Dog
    },
    name:{
        value () {
            return 'Dog'
        }
    }
}) //多态 
// document.write(new Dog().say()) // I'm Dog 
// console.log(Dog.prototype.constructor) // Dog 