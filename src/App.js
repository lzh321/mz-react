import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './views/Home';
import City from './views/City';
class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/city" component={City}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;