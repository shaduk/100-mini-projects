
var StarsFrame = React.createClass({
  render: function() {
    var numberOfStars = Math.floor(Math.random()*9) + 1;
    var stars = [];
    for(var i = 0; i < numberOfStars; i++)
    {
      stars.push(<span className="glyphicon glyphicon-star"></span>);
    }
    return (
      <div id="stars-frame">
        <div className="well">
          {stars}
        </div>
      </div>
      );
  }
});

var ButtonFrame = React.createClass({
  render: function() {
    return (
      <div id="game">
        <div id="button-frame">
          <button className = "btn btn-primary btn-lg">=</button>
        </div>
      </div>
      );
  }
});

var AnswerFrame = React.createClass({
  render: function() {
    return (
      <div id="answer-frame">
        <div className="well">
          ...
        </div>
      </div>
      );
  }
});

var Game = React.createClass({
  render: function() {
    return (
      <div id="game">
      <h2>Play Nine </h2>
      <hr />
      <div className="clearfix">
        <StarsFrame />
        <ButtonFrame />
        <AnswerFrame />
      </div>
      </div>
      );
  }
});


React.render(
  <Game />,
  document.getElementById('container')
);
