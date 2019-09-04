//sky-react.js

import {createVnode} from './sky-vdom'

function createElement(){
    console.log(arguments)
}

export default {createElement}

//sky-react-dom.js

function render(){
    
}

export default {render}

//sky-vdom.js

function createVnode(type, props){
    return {type,props}
}

export default {createVnode}