'use strict'

import {observable, action} from 'mobx'
import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import {observer,PropTypes} from 'mobx-react'
// import PropTypes from 'prop-types'
// 真正用到被修改的可观察数据 observer更新视图  建议所有 react组件都用 observer修饰

// 建议对可观察数据的修改放到 action中
class Store {
   @observable cache = {queue : []} // 与教程不相符 可能与 mobx 版本相关
   @action.bound add () {
       this.cache.queue.push(2)
   }
}

const store = new Store()

@observer
class Bar extends Component {
    static propTypes = {
        queue : PropTypes.observableArray
    }
    render() {
        const queue = this.props.queue
        return <span>{queue.length}</span>
    }
}
@observer
class Foo extends Component {
    static propTypes = {
        cache : PropTypes.observableObject
    }
    render() {
        const cache = this.props.cache
        return <div>
            <button onClick={this.props.onClick}>刷新</button>
            <Bar queue={cache.queue} />
            </div>
    }
}

ReactDOM.render(<Foo cache={store.cache} onClick = {store.add}/>, document.querySelector('#app'))