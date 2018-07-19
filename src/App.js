import React, { Component } from 'react';
import 'jquery';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';
import './App.css';
import { Container, Dropdown, Button, NavItem } from 'react-materialize';

class App extends Component {
  render() {
    return (
      <Container>
        <Dropdown trigger={<Button icon='airplanemode_active' />}>
          <NavItem>BCN</NavItem>
          <NavItem>SFX</NavItem>
          <NavItem divider />
          <NavItem>AGP</NavItem>
        </Dropdown>
      </Container>
    );
  }
}

export default App;
