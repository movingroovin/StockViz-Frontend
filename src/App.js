import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// Custom Component
import Home from './components/Home';
import BuySell from './components/BuySell';
import ChipViz from './components/ChipViz';
import ChipVizByPrice from './components/ChipVizByPrice';
import Chart from './components/Chart';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/chipviz' component={ChipViz}/>
            <Route exact path='/chipvizbyprice' component={ChipVizByPrice}/>
            <Route exact path='/buysell' component={BuySell}/>
            <Route exact path='/chart' component={Chart}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
