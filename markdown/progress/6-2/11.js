import React from './sky-react';
import ReactDOM from './sky-react-dom';

function App(props){
    return <h1>你追我，{props.name}</h1>
}

class App1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '钢琴'
        }
    }
    render(){
        return <div>
            <h2>你追我，{this.props.name}</h2>
            <h2>不追，{this.state.name}</h2>
        </div>
    }
}

ReactDOM.render(
    <div id="demo" name="skylyk" style={{'color':'red'}}>
        <p>龙1诺萱</p>
        <span>龙2诺萱</span>
        <App name="函数组件" />
        <App1 name="class组件" />
    </div>
    , document.getElementById('root'));