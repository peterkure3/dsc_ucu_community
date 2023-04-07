import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile'
import Confirmation from './components/Confirmation';
import Members from './components/Members'
import Admin from './components/Admin'
import Events from './components/Events';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/confirmation" component={Confirmation} />
        <Route path="/members" component={Members} />
        <Route path="/admin" component={Admin} />
        <Route path="/events" component={Events} />



      </Switch>
    </Router>
  );
}


export default App;
