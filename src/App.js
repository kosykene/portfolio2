import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './pages/home';
import About from './pages/about';



function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

          <Route exact path="/" render={() => {
            return (
              <Home />
            )
          }} />
          <Route path="/about_me" render={() => {
            return (
              <About />
            )
          }} />
        </Switch>
      </Router>


    </div>
  );
}

export default App;
