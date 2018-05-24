import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Bootstrap, Grid, Row, Col, Button, Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="http://pluspng.com/img-png/guitar-hd-png-electric-guitar-png-512.png " className="App-logo" alt="Ujwal" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button type="button" class="btn btn-success">Success</button>
        <Button bsStyle="success">Success</Button>
        <p className="App-intro">
          Ujwal first app
        </p>

        <img src="http://pluspng.com/img-png/guitar-hd-png-electric-guitar-png-512.png" className="App-logo" alt="Ujwal" />
        <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">React-Bootstrap</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Link
    </NavItem>
    <NavItem eventKey={2} href="#">
      Link
    </NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>;
        
      </div>

    );
  }
}

export default App;
