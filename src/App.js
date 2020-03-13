import React, { Component } from 'react';
import 'jquery';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';
import './App.css';
import { Container, Dropdown, Button } from 'react-materialize';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Matches from './Components/Matches';
import Cards from './Components/Cards';
import Profile from './Components/Profile';
import Home from './Components/Home';

export class App extends Component {
  state = {
    users: [
      {
        id: 1,
        email: 'climber1@gmail.com',
        password: 'climb',
        salt: '',
        googleId: '',
        climbingStyles: ['trad'],
        preferredGrades: ['5.8'],
        zipCode: 12561,
        phoneNumber: '3472441139',
        bio: "I don't care how hard you climb as long as you bring snacks",
        img: 'trad_dad.jpeg',
        gear: 'rack',
        matches: [],
        coords: {}
      },
      {
        id: 2,
        email: 'climber2@gmail.com',
        password: 'climb',
        salt: '',
        googleId: '',
        climbingStyles: ['bouldering'],
        preferredGrades: ['v16'],
        zipCode: 12525,
        phoneNumber: '1234567890',
        bio: 'Looking for someone to project hard shi*t with!',
        img: 'guy1.jpeg',
        gear: 'rope',
        matches: []
      },
      {
        id: 3,
        email: 'climber3@gmail.com',
        password: 'climb',
        salt: '',
        googleId: '',
        climbingStyles: ['sport'],
        preferredGrades: ['5.10'],
        zipCode: 12525,
        phoneNumber: '1234567890',
        bio: 'What are your favorite sport climbs in the gunks?',
        img: 'guy2.jpeg',
        gear: 'brought the stoke!!!',
        matches: []
      },
      {
        id: 4,
        email: 'climber4@gmail.com',
        password: 'climb',
        salt: '',
        googleId: '',
        climbingStyles: ['sport'],
        preferredGrades: ['5.6'],
        zipCode: 12572,
        phoneNumber: '1234567890',
        bio: 'What are your favorite sport climbs in the gunks?',
        img: 'guy3.png',
        gear: '80m rope',
        matches: []
      },
      {
        id: 5,
        email: 'climber4@gmail.com',
        password: 'climb',
        salt: '',
        googleId: '',
        climbingStyles: ['sport'],
        preferredGrades: ['5.6'],
        zipCode: 12572,
        phoneNumber: '1234567890',
        bio: 'What are your favorite sport climbs in the gunks?',
        img: 'girl3.png',
        gear: '80m rope',
        matches: []
      },
      {
        id: 6,
        email: 'climber5@gmail.com',
        password: 'climb',
        salt: '',
        googleId: '',
        climbingStyles: ['sport'],
        preferredGrades: ['5.6'],
        zipCode: 12572,
        phoneNumber: '1234567890',
        bio: 'Hoping to learn how to lead. Safe belayer',
        img: 'indoorWallClimber.png',
        gear: 'triple rack',
        matches: []
      },
      {
        id: 7,
        email: 'climber4@gmail.com',
        password: 'climb',
        salt: '',
        googleId: '',
        climbingStyles: ['sport'],
        preferredGrades: ['5.6'],
        zipCode: 12572,
        phoneNumber: '1234567890',
        bio: 'Hoping to learn how to lead. Safe belayer',
        img: 'girl1.jpeg',
        gear: 'triple rack',
        matches: []
      },
      {
        id: 8,
        email: 'climber6@gmail.com',
        password: 'climb',
        salt: '',
        googleId: '',
        climbingStyles: ['sport'],
        preferredGrades: ['5.6'],
        zipCode: 12572,
        phoneNumber: '1234567890',
        bio: 'Hoping to learn how to lead. Safe belayer',
        img: 'girl2.jpeg',
        gear: 'triple rack',
        matches: []
      }
    ],
    me: {
      id: 8,
      email: 'seekingBelayer@gmail.com',
      password: 'climb',
      salt: '',
      googleId: '',
      climbingStyles: ['trad'],
      preferredGrades: ['5.10'],
      zipCode: 12561,
      phoneNumber: '3472441139',
      bio: "I don't care how hard you climb as long as you bring snacks",
      img: 'clip2.png',
      gear: 'rack',
      matches: [],
      coords: {}
    }
  };
  render() {
    return (
      <Router>
        <Container>
          <Dropdown trigger={<Button icon="person" />}>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/matches">Matches</NavLink>
            </li>
            <li>
              <NavLink to="/home">Home1</NavLink>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </Dropdown>
          <Route exact path="/matches" component={Matches} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/home" component={Home} />

          <Route
            exact
            path="/"
            render={() => {
              return <Cards users={this.state.users} me={this.state.me} />;
            }}
          />
        </Container>
      </Router>
    );
  }
}
export default App;
