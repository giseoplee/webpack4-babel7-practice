import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '@coreui/icons/css/coreui-icons.min.css';
import { Login, Content, Register } from './views/pages';
import Layout from './container/Layout'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" name="Login Page" component= { Layout } />
          <Route path="/login" name="Login Page" component= { Login } />
          <Route path="/content" name="Content Page" component= { Content } />
          <Route path="/register" name="Register Page" component= { Register } />
        </Switch>
      </Router>
    );
  }
}

export default App;