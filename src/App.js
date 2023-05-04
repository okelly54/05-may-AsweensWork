import React from 'react';
import {Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from './components/routing/Home';
import Nav from './components/routing/Nav';
import Login from './components/routing/Login';
import Profile from './components/routing/Profile';
import Todos from './components/routing/Todos';
import Users from './components/routing/Users';
import Page404 from './components/routing/Page404';

function App() {
    return (
      <Router>
      <BrowserRouter>
      <Nav/>

      <Route path="/" exact>
        <Home/>
      </Route>

      <Route path="/Login">
        <Login/>
      </Route>

      <Route path="/Profile">
        <Profile/>
      </Route>

      <Route path="/Todos">
        <Todos/>
      </Route>

      <Route path="/Users">
        <Users/>
      </Route>

      <Route exact path="/Users/:id/:username">
        <Users/>
      </Route>

      <Route path="/Page404">
        <Page404/>
      </Route>

      </BrowserRouter>
      </Router>
    );
}

export default App;
