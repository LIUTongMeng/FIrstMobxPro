function Animal () {

}

function Dog () {

}

// 属性类型
//    数据属性 4个描述行为的特性
//      configurable 
//      enumerable 能否通过 for-in方位
//      writable 能否修改属性值
//      value  包含属性的数据值 
      

// dog instanceof Animal === true 
// 原理 
// dog._proto_._proto_... === Animal.prototype

Object.defineProperties(Animal.prototype, {
    name:{
        value() {
            return 'Animal'
        }
        
    },
    say:{
       value() {
           return `I'am ${this.name()}`
       }
    }
})

Dog.prototype = Object.create(Animal.prototype, {
    constructor:{
        value:Dog,
        enumerable:false
    },
    name:{
        value() {
            return 'Dog'
        }
    }
});
console.log(Dog.prototype.constructor)
document.write(new Dog().say())