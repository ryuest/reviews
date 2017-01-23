var SayHello = React.createClass({
  getInitialState: function() {
    return {message: 'Hello!'};
  },

  handleClick: function() {
    alert(this.state.message);
  },


  render:function () {
    return (
      <div className = "counter">
      <button onClick={this.handleClick}>
      Say hello
    </button>
      </div>
    );
  }
})


ReactDOM.render(
  <SayHello />, document.getElementById('bind'));
