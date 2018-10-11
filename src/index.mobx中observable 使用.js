import {observable} from 'mobx'
// 复杂的数据类型  array object map
const arr = observable(['1','3'])
console.log(arr, Array.isArray(arr))  // 第二个 返回 true 与教程不同  教程返回 false 使用 isArrayLike 返回true
console.log(arr[0]);// 尽量不要用下标越界 访问  会有 警告
arr.push(4)  
console.log(arr[2]);


const obj = observable({
    a:1,
    b:2
})

console.log(obj.a)  // 使用 extendObservable  扩展属性

// 原始数据类型  使用 observable.box
 var num = observable.box(30)
 var str = observable.box('abc')
 var bool = observable.box(false)


 // 使用 .get 获取值 使用 .set 设置值

 console.log(num, str, bool )
 console.log(num.get(), str.get(), bool.get() )
 num.set(50)
 str.set('abcd')
 bool.set(true)
 console.log(num, str, bool )
 console.log(num.get(), str.get(), bool.get() )