import React, { Component } from 'react';

export class Profile extends Component {
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
    return <div>Profile page!</div>;
  }
}

export default Profile;
