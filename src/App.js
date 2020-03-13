import React, { Component } from 'react';
import 'jquery';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';
import './App.css';
import { Container, Dropdown, Button, NavItem } from 'react-materialize';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Matches from './Components/Matches';
import Cards from './Components/Cards';
import Profile from './Components/Profile';

export class App extends Component {
  state = {
    users: [
      {
        email: 'climber1@gmail.com',
        password: 'climb',
        salt: '',
        googleId: '',
        climbingStyles: ['trad'],
        preferredGrades: ['5.8'],
        zipCode: 12561,
        phoneNumber: '3472441139',
        shortBio: "I don't care how hard you climb as long as you bring snacks"
      },
      {
        email: 'climber2@gmail.com',
        password: 'climb',
        salt: '',
        googleId: '',
        climbingStyles: ['bouldering'],
        preferredGrades: ['v16'],
        zipCode: 12525,
        phoneNumber: '1234567890',
        shortBio: 'Looking for someone to project hard shi*t with!'
      },
      {
        email: 'climber3@gmail.com',
        password: 'climb',
        salt: '',
        googleId: '',
        climbingStyles: ['sport'],
        preferredGrades: ['5.10'],
        zipCode: 12525,
        phoneNumber: '1234567890',
        shortBio: 'What are your favorite sport climbs in the gunks?'
      }
    ]
  };

  render() {
    return (
      <Router>
        <Container>
          <Dropdown trigger={<Button icon="person" />}>
            <NavItem href="/profile">Profile</NavItem>
            <NavItem href="/matches">Matches</NavItem>
            <NavItem divider />
            <NavItem>Messages</NavItem>
          </Dropdown>
          <Cards props={this.state} />
          <Route exact path="/matches" component={Matches} />
          <Route exact path="/profile" component={Profile} />
        </Container>
      </Router>
    );
  }
}

export default App;
