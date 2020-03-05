import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component'

const Hatspage = (props) => (
  <div>
    <button onClick={() => props.history.push('/topic')}>Click here</button>
    <h1>HATS PAGE</h1>
  </div>
)

const Topic = () => (
  <div>
    <h1>Topic</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={Hatspage} />
        <Route exact path='/topic' component={Topic} />
      </Switch>
    </div>
  );
}

export default App;
