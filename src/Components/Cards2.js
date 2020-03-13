import React, { Component } from 'react';
import { render } from 'react-dom';
import { Card, CardWrapper } from 'react-swipeable-cards';

export default class Cards2 extends Component {
  onSwipe(data) {
    console.log(data.name + ' was swiped.');
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
        gear: 'rack'
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
        gear: 'rope'
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
        gear: 'brought the stoke!!!'
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
        img: 'guy3.jpeg',
        gear: '80m rope'
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
        img: 'girl3.jpeg',
        gear: '80m rope'
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
        gear: 'triple rack'
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
        img: 'girl1.png',
        gear: 'triple rack'
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
        img: 'girl2.png',
        gear: 'triple rack'
      }
    ];
    return data.map(d => {
      return (
        <Card key={d.id} onSwipe={this.onSwipe.bind(this)} data={d}>
          {d.bio}
        </Card>
      );
    });
  }

  render() {
    return <CardWrapper>{this.renderCards()}</CardWrapper>;
  }
}
