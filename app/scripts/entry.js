import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, browserHistory, Link, IndexRoute} from 'react-router';

const App = React.createClass({
  render: function() {
    return (
      <div>
        <nav>
          <Link to="/">Go home</Link>
          <Link to="/test">Go to test</Link>
        </nav>
        {this.props.children}
      </div>
    )
  }
})

const Home = React.createClass({
  render: function() {
    return (
      <h1>Home!</h1>
    )
  }
})

const Test = React.createClass({
  render: function() {
    return (
      <h1>Test!</h1>
    )
  }
})

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/test" component={Test}/>
    </Route>
  </Router>
)

render(router, document.getElementById('container'));
