import {observable, isArrayLike} from 'mobx'
// observable 将对象包装成可观察的对象 本身监控 
// 避免越界访问 extendObservale 新增加属性
// observable.box 将原始类型数据包装成可观察
// array object map 

const arr = observable([1,2,3])
console.log(arr)
console.log(Array.isArray(arr))
console.log(isArrayLike(arr))

const obj = observable({a:1, b:2})
console.log(obj)


// const m = observable(new Map('a', 1))
// console.log(m)

// 原生类型  
const num = observable.box(20)
const str = observable.box('abc')
const b = observable.box(true)

console.log(num,str,b)
console.log(num.get(),str.get(),b.get())
num.set(50)
str.set('dddd')
b.set(false)
console.log(num,str,b)
console.log(num.get(),str.get(),b.get())

class Store{
    @observable arr = [];
    @observable obj = {};
    @observable map = new Map();

    @observable str = 'hello';
    @observable num = 12;
    @observable bool = false;
}


