var BallActions            = require('./actions/ball_actions');
var RootComponent          = require('./components/app.jsx');
var React                  = require('react');

var App = {
  container: function() {
    return document.getElementById('cannode-react-hook');
  },

  start: function() {
    React.renderComponent(
      RootComponent(),
      this.container()
    );

    setInterval(this.animateBalls, this.refreshInterval);
  },

  refreshInterval: 16, // ~60fps

  animateBalls: function() {
    BallActions.animateAll();
  }

};

module.exports = App;
