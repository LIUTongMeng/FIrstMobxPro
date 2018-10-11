import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {decorate, observable,  action} from 'mobx'
import {observer,PropTypes as ObservablePropTypes} from 'mobx-react'
// import PropTypes from 'prop-types'

// 
class Store {
    @observable cache = {
        queue:[]
    }
   
    @action.bound // 不能与箭头函数一起使用  箭头函数已经是绑定过的并且不能重复绑定
    add() {
        // debugger
        console.log(this)
       this.cache.queue.push(1)
    }
}

// decorate(Store, {
//     cache:observable,
//     add:action.bound
// })

const store = new Store()
console.log(store)
@observer
class Bar extends Component {
    static propTypes = {
        queue:ObservablePropTypes.observableArray
    }
    render() {
        const queue = this.props.queue;
        return  <div>{queue.length}</div>
    }
}

@observer
class Foo extends Component {
    // dev环境有利于查找错误 帮助开发人员更好的发现错误
    static propTypes = {
        cache : ObservablePropTypes.observableObject
    }

    render() {
        const cache = this.props.cache;
        return <div>
            <button onClick={this.props.onClick }>add</button>
            <Bar queue={cache.queue || []}/>
        </div>
    }
}

console.log(store)

ReactDOM.render(<Foo cache={store.cache} onClick={store.add}/>, document.getElementById('app'))



