"use strict";

var PLAYERS = [{
  name: "Player 1",
  score: 31,
  id: 1
}, {
  name: "Player 2",
  score: 35,
  id: 2
}, {
  name: "Player 3",
  score: 42,
  id: 3
}];

function Header(props) {
  return React.createElement(
    "div",
    { className: "header" },
    React.createElement(
      "h1",
      null,
      props.title
    )
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
};

var Counter = React.createClass({
  displayName: "Counter",

  propTypes: {
    initialScore: React.PropTypes.number.isRequired
  },

  getInitialState: function getInitialState() {
    return {
      score: this.props.initialScore
    };
  },

  incrementScore: function incrementScore() {
    this.setState({
      score: this.state.score + 1
    });
  },

  decrementScore: function decrementScore() {
    this.setState({
      score: this.state.score - 1
    });
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: "counter" },
      React.createElement(
        "button",
        { className: "counter-action decrement", onClick: this.decrementScore },
        " - "
      ),
      React.createElement(
        "div",
        { className: "counter-score" },
        this.state.score
      ),
      React.createElement(
        "button",
        { className: "counter-action increment", onClick: this.incrementScore },
        "+ "
      )
    );
  }
});

function Player(props) {
  return React.createElement(
    "div",
    { className: "player" },
    React.createElement(
      "div",
      { className: "player-name" },
      props.name
    ),
    React.createElement(
      "div",
      { className: "player-score" },
      React.createElement(Counter, { initialScore: props.score })
    )
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired
};

function Application(props) {
  return React.createElement(
    "div",
    { className: "scoreboard" },
    React.createElement(Header, { title: props.title }),
    React.createElement(
      "div",
      { className: "players" },
      props.players.map(function (player) {
        return React.createElement(Player, { name: player.name, score: player.score, key: player.id });
      })
    )
  );
}

Application.propTypes = {
  title: React.PropTypes.string,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired
  })).isRequired
};

Application.defaultProps = {
  title: "Scoreboard"
};

ReactDOM.render(React.createElement(Application, { players: PLAYERS }), document.getElementById('container'));
