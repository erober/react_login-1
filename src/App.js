import React, { Component } from 'react';
import { BrowserRouter as Router,Route } from "react-router-dom";
import './App.css';
import login from "./pages/login";
import signup from "./pages/signup";
import Home from  "./pages/home";

class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/" component={Home}>
               
          </Route>     
          <Route path="/login" component={login}>
               
          </Route>
          <Route path="/signup" component={signup}>
               
          </Route>

      </Router>
    );
  }
}

export default App;
