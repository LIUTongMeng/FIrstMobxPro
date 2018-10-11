import {observable, computed, autorun, when, reaction, action, runInAction} from 'mobx'

//API  computed, autorun, when , reaction

const t = new class Store {
    @observable price = 0;
    @observable amount = 1;
    @observable name = '雅诗兰黛'
  // 类的get 属性
    @computed get mixed() {
        return this.price ;
    }

     @action bar () {
         this.price = 1;
         this.amount = 3;
     }

     @action.bind bar1 () {
        this.price = 1;
        this.amount = 3;
    }
    
}

console.log(t.bar())
// computed 对可观察数据做出反应
            // 可观察对象

//  console.log(store.price)
// 返回计算值
// 可以将多个可观察数据 合并成一个可观察数据
// var foo = computed(function() {
//     return store.string + '/' + store.number
// })

// console.log(foo)


// console.log(foo.get())
// foo.observable(function(change){
//     consoe.log(change)
// })

// store.str = 'word';
// store.num = 30


// autorun 
//  参数  无参函数 
//  出发条件  修改autorun中应用的属性
//  作用    在可观察数据被修改后 自动修改状态

// autorun(() => {
//     console.log(store.mixed())
// })

// store.str = 'word';
// store.num = 30


// autorun(() => {
//     console.log(store.string + store.number)
// })
//   第一个函数  必须根据 boolean 类型  一个函数初始为真则第二个参数立即执行
//     
// when(() =>  true, () => {})

// 数据第一次填充之后启用写缓存的
// 引用可观察函数 

// reaction()


// action 讲多次赋值合并到一次 从而减少出发

runInAction('modify', () => {

})