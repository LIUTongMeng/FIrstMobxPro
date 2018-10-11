"use strict";
//  修饰类和类成员 ， 类成员包含 类属性和类方法成员
// decorator 是特殊的方法函数， 区别是参数签名不同
function log(target) {
    // 获取所有成员签名
   const desc = Object.getOwnPropertyDescriptors(target.prototype);
   for (const key of Object.keys(desc)) {
    //    忽略构造方法
       if(key === 'constructor') {
           continue ;
       }
       const func = desc[key].value
       if('function' === typeof func) {
           Object.defineProperty(target.prototype, key,{
               value(...args) {
                   console.log('before = ',key)
                   const ret = func.apply(this, args);
                   console.log('after = ',key)
                   return ret;
               }
           })
       }
   }
}

// 类成员 属性
// target 类的实例对象, key 属性名称, descriptor 描述符对象
// descriptor对象的属性 configurable enumerable writable value  中的一个或多个
//
function readonly (target, key, descriptor) {
    Object.defineProperty(target.prototype, 'key', {
        writable:false
    })
}

// 类成员 方法
// targe, key, descriptor
function validate (target, key, descriptor) {
   const func = descriptor.value;
   descriptor.value = function(...args) {
       for (const num of args) {
           if('number' !== typeof num){
               throw new Error(`${num} is not a number`);
           }
       }
       return func.apply(this,args);
   } 
}

// 特殊的函数
@log
class Numberic {
   @readonly PI = 3.1415926
    
   @validate
    add(...nums) {
        return nums.reduce((p, n) => p + n , 0)
    }
}

//  new Numberic().add(1, 'c')

new Numberic().PI = 123