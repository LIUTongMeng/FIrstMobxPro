// 对可观察对象的反应
import {observable, computed, autorun, when, reaction } from 'mobx'
class Store {
    @observable array = []
    @observable object  = {}
    @observable map = new Map()

    @observable str = 'abc'
    @observable num = 20
    @observable bool = false

   // 用法二  
   // 该方法无法使用 observe 方法  只能获取的mixed 的结果
   // 使用 autorun 
   @computed get mixed()  {
       return this.str + ' / ' + this.num;
   }
}

const store = new Store()
// computed  
// 将其他可观察数据组合在一起 变成新的可观察数据
// 用法 一  
        // const foo = computed(() => {
        //   return store.str + ' / ' + store.num
        // })
        // foo.observe(function(change) {
        //     console.log(change)
        // })
        // store.str = 'abce';
        // store.num = 50

        // console.log(foo, foo.get())
// autorun 自动运行 无论是否修改可观察参数 都会运行一次
// 运行什么?  传入的参数 
// 怎么运行？ 修改autorun中引用的任意可观察数据
// 作用？  消除副作用
// 初始化时  不数据自动运行
    //   autorun(() => {
    //     // console.log( store.str + ' / ' + store.num)
    //     console.log( store.mixed)
    //   })

    //   store.str = 'abce';
    //   store.num = 50



// when  条件执行逻辑  autorun的变种
// 入参 一  函数参数  
// 入参 二  函数参数
// **** 1   第一个参数必须是可观察参数 且参数类型为布尔类型  不能是普通变量
// **** 2   若一个可观察参数初始值为 true 则 第二个函数参数同步执行

// when (() => store.bool, () => console.log('it is true '))
// store.bool = true 


// reaction
// 场景   当数据第一次填充之后 在启用之后逻辑

reaction(() => [store.str, store.num], arr => console.log(arr.join('/')))
store.str = 'abce';
store.num = 50


// action 将多次赋值合并到一次 从而减少出发
runInAction('modify', () => {

})