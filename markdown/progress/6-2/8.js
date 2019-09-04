//sky-react.js

import {createVnode} from './sky-vdom'

function createElement(type, props, ...children){
    delete props.__source //都是babel提供的无用的属性删除调(ps/其实我也不记得是什么东西提供的了。。)
    delete props.__self
    props.children = children

    return createVnode(type,props)
}

export default {createElement}

//sky-react-dom.js

function render(vnode, container){
    container.innerHTML = `<pre>${JSON.stringify(vnode,null,2)}</pre>`
}

export default {render}
