class SayHello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: 'Hello!'};
    // This line is important!
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert(this.state.message);
  }

    render() {
    // Because `this.handleClick` is bound, we can use it as an event handler.
    return (
      <div className = "zer">
      <button onClick={this.handleClick}>
      Say hello
    </button>
      </div>
);
  }
}

ReactDOM.render(
  <SayHello />,
  document.getElementById('bind2')
);
