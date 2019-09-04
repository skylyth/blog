import {initNode} from './sky-vdom'

function render(vnode, container){
      const node = initNode(vnode)
      container.appendChild(node)
    //container.innerHTML = `<pre>${JSON.stringify(vnode,null,2)}</pre>`
}

export default {render}