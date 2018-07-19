import React, { Component } from 'react';
import 'jquery';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';
import { Dropdown, Button, NavItem } from 'react-materialize';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dropdown trigger={<Button>Open</Button>}>
          <NavItem>one</NavItem>
          <NavItem>two</NavItem>
          <NavItem divider />
          <NavItem>three</NavItem>
        </Dropdown>
      </div>
    );
  }
}

export default App;
