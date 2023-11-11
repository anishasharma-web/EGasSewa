import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import GasConnectionForm from './components/GasConnectionForm';
import ServiceDetails from './components/ServiceDetails';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gas-connection">Gas Connection</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/gas-connection">
            <GasConnectionForm />
          </Route>
          <Route path="/services">
            <ServiceDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
