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
import FindMe from './Components/FindMe';
import FindMe2 from './Components/FindMe2';
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
        img: 'c1.jpeg',
        gear: 'rack',
        matches: [],
        coords: { latitude: 40.78676, longitude: -73.950311 }
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
        img: 'c3.jpeg',
        gear: 'rope',
        matches: [],
        coords: { latitude: 40.762773, longitude: -73.992883 }
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
        img: 'c4.jpeg',
        gear: 'brought the stoke!!!',
        matches: [],
        coords: { latitude: 40.738377, longitude: -73.984905 }
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
        bio: 'Training for el cap',
        img: 'guy3.png',
        gear: '90m rope',
        matches: [],
        coords: { latitude: 40.748197, longitude: -73.94873 }
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
        bio: 'Mainly a boulderer',
        img: 'indoorWallClimber.png',
        gear: 'triple rack',
        matches: [],
        coords: { latitude: 40.726274, longitude: -73.957997 }
      },
      {
        id: 7,
        email: 'climber4@gmail.com',
        password: 'climb',
        salt: '',
        googleId: '',
        climbingStyles: ['trad'],
        preferredGrades: ['5.6'],
        zipCode: 12572,
        phoneNumber: '1234567890',
        bio: 'Psyched to get on some moderates',
        img: 'trad_dad.jpeg',
        gear: 'triple rack',
        matches: [],
        coords: { latitude: 40.753209, longitude: -73.939585 }
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
        bio: 'Anyone want to go sport rappelling with me?',
        img: 'girl2.jpeg',
        gear: 'toprope gear',
        matches: [],
        coords: { latitude: 40.817748, longitude: -73.958958 }
      }
    ],
    me: {
      id: 5,
      email: 'climber4@gmail.com',
      password: 'climb',
      salt: '',
      googleId: '',
      climbingStyles: ['sport'],
      preferredGrades: ['5.6'],
      zipCode: 12572,
      phoneNumber: '1234567890',
      bio: 'Looking for someone to teach me how to lead trad',
      img: 'c4.jpeg',
      gear: 'none',
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/matches">Matches</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </Dropdown>
          <Route
            exact
            path="/matches"
            render={() => {
              return <Matches me={this.state.me} />;
            }}
          />
          <Route
            exact
            path="/profile"
            render={() => {
              return <Profile me={this.state.me} />;
            }}
          />
          <Route
            exact
            path="/loc"
            render={() => {
              return <FindMe2 me={this.state.me} users={this.state.users} />;
            }}
          />
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Cards
                  users={this.state.users}
                  me={this.state.me}
                  // onSwipeRight={this.onSwipeRight}
                />
              );
            }}
          />
        </Container>
      </Router>
    );
  }
}
export default App;
