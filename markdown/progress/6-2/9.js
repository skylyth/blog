import {createVnode} from './sky-vdom'

function createElement(type, props, ...children){
    console.log(type)
    delete props.__source
    delete props.__self
    props.children = children

    let vType //判断是函数组件，class组件或是dom组件
    if(typeof type === 'string'){
        vType = 1 //dom组件
    }else if(typeof type === 'function'){
        if(type.isReactComponent){ //说明是class组件
            vType = 2
        }else{  //说明是函数组建
            vType = 3
        }
    }
    return createVnode(vType,type,props)
}

class Component{
    constructor(props){
        this.props = props
        this.state = {}
    }
    setState(){

    }
}

Component.isReactComponent = true

export default {createElement,Component}