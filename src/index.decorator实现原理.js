// decorator 修饰类与类成员
// 类成员包含 类属性成员 和 类方法成员
// decorator 一种特殊的函数
// 修饰类
// 入参 target 代表被修饰的类
function log(target) {
    const desc = Object.getOwnPropertyDescriptors(target.prototype);
    for (const key of Object.keys(desc)) {
        if (key === 'constructor') {
            continue;
        }
        const func = desc[key].value;

        if('function' === typeof func) {
            Object.defineProperty(target.prototype, key, {
                value(...args) {
                    console.log('before' + key)
                    const ret = func.apply(this,args)
                    console.log('after' + key)
                    return ret;
                }
            })
        }

    }
}
// 修饰类属性成员
// 入参 target 代表被修饰的类  key 类成员属性   descriptor  描述符
function readonly (target, key, descriptor) {
   descriptor.writable = false;
}

// 修饰类方法成员
// 入参 target 代表被修饰的类  key 类成员属性   descriptor  描述符
function validate (target, key, descriptor) {
    const func = descriptor.value;
    descriptor.value = function (...args) {
        for (const num of args) {
            if ('number' !== typeof num) {
                throw new Error (`${num} is no a number`)
            }

        }
        return func.apply(this, args);
    }
 }
@log
class Numberic {
    @readonly PI = 3.1415926

    @validate
    add (...nums) {
        return nums.reduce((p,n) => p + n, 0)
    }
}

new Numberic().add(1, 2);
// new Numberic().PI = 1111;


new Numberic().add(1, '2');