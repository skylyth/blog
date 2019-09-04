class App extends React.Component {
    render() {
      return React.createElement(
        "div",
        null,
        "Hello ",
        this.props.name,
        ", I am ",
        2 + 2,
        " years old"
      )
    }
  }
  
  ReactDOM.render(React.createElement(App, { name: "React" }), mountNode)