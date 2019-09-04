class App extends React.Component {
    render() {
      return (
        <div>
          Hello {this.props.name}, I am {2 + 2} years old
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <App name="React" />, 
    mountNode
  )