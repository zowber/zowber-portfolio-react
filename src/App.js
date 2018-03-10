import React from 'react';
import { Route } from 'react-router-dom'

import './App.css';
import Home from './Home'
import PortfolioDetail from './PortfolioDetail'

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/:itemId" component={PortfolioDetail}/>
      </div>
    );
  }
}

export default App;
