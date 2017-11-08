import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from "./components/base/Header";
import HomePage from "./components/pages/homepage/MainContent";
import Channel from './components/pages/channel/Channel';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/channel/:id" component={Channel}/>
        </div>
      </Router>

    );
  }
}

export default App;
