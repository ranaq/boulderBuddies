import { Card, CardWrapper } from 'react-swipeable-cards';
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';

export default class Example extends Component {
  onSwipe(data) {
    console.log(data.name + ' was swiped.');
  }
  onSwipeLeft(data) {
    console.log('I was swiped left.');
  }
  renderCards() {
    let data = [
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
        matches: []
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
    ];

    return data.map(d => {
      const btns = {
        display: 'flex',
        justifyContent: 'space-between',
        color: 'teal'
      };
      const body = {
        fontFamily: 'Roboto'
      };
      const cardStyle = {
        backgroundColor: '#lightgray',
        padding: '10px',
        width: '600px',
        // height: '320px',
        position: 'absolute',
        // top: '20%',
        left: '10%',
        right: '10%',
        borderRadius: '5%',
        border: '2px solid teal',
        height: '500px',
        fontFamily: 'Roboto',
        alignItems: 'center',
        justifyContent: 'space-between'
      };
      const cardImage = {
        display: 'flex',
        borderTopLeft: '10px',
        width: '85%',
        height: '30%',
        minHeight: '300px',
        borderRadius: '5%',
        justifyContent: 'center',
        alignItems: 'center'
      };
      return (
        <Card
          key={d.id}
          style={cardStyle}
          onSwipe={this.onSwipe.bind(this)}
          onSwipeLeft={this.onSwipeLeft.bind(this)}
          data={d}
        >
          {d.name}
          <img style={cardImage} src={d.img} alt="" />
          <div style={btns}>
            <a
              style={{ color: 'teal' }}
              className="btn-floating  waves-effect waves-teal"
            >
              <i onClick={console.log('No!')} className="material-icons">
                clear
              </i>
            </a>
            <a
              onClick={console.log('Yes!')}
              className="btn-floating  waves-effect waves-teal"
            >
              <i className="material-icons">add</i>
            </a>
          </div>
          <div>
            <p>
              {d.climbingStyles} | {d.preferredGrades}
            </p>
            <p>{d.bio}</p>
          </div>
        </Card>
      );
    });
  }

  render() {
    return (
      <div>
        <CardWrapper>{this.renderCards()}</CardWrapper>
      </div>
    );
  }
}
