function createVnode(vType, type, props){
    return {vType,type,props}
}
function initNode(vnode){
    let vType = vnode.vType
    console.log(vType)
    if(!vType){
        return document.createTextNode(vnode)
    }
    if(vType == 1){
        return initTextElement(vnode)
    }else if(vType == 2){
        return initClassElement(vnode)
    }else if(vType == 3){
        return initFuncElement(vnode)
    }
}

function initTextElement(vnode){
    const {type, props} = vnode
    const node = document.createElement(type)
    //过滤key,styles等特殊props
    const {key,style,...reset} = props
    Object.keys(reset).forEach(i=>{
        node.setAttribute(i, reset[i])
    })
    if(style){
        Object.keys(style).forEach(i=>{
            node.style[i] = style[i]
        })
    }
    //初始化子元素
    initChildren(node,props.children)
    return node
}

function initClassElement(vnode){
    const Comp = vnode.type
    const component = new Comp(vnode.props)
    const newNode = component.render()
    return initNode(newNode)
}

function initFuncElement(vnode){
    const Comp = vnode.type
    const newNode = new Comp(vnode.props)
    return initNode(newNode)
}

function initChildren(node, children){
    children.forEach(i=>{
        node.appendChild(initNode(i))
    })
}

export {createVnode,initNode}