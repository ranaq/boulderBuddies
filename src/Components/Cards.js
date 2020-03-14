import { Card, CardWrapper } from 'react-swipeable-cards';
import React, { Component } from 'react';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';
import './Cards.css';
import Matches from './Matches';

export default class Cards extends Component {
  onSwipeRight(data) {
    this.props.users.forEach(user => {
      if (user.id === data.id) {
        console.log('match');
        this.props.me.matches.push(user);
        console.log('matches', this.props.me.matches);
        return this.props.me.matches;
      }
    });
    return <Matches me={this.props.me} />;
  }
  onSwipeLeft(data) {
    console.log('I was swiped left.');
  }
  renderCards() {
    console.log('props in Cards', this.props);
    const data = this.props.users;
    return this.props.users.map(d => {
      const btns = {
        display: 'flex',
        justifyContent: 'space-between'
      };
      const body = {
        fontFamily: 'Roboto'
      };
      const cardStyle = {
        overflow: 'auto',
        color: 'red',
        display: 'flex',
        flexDirection: 'column',
        transform: 'translateY(-35px)',
        color: 'black',
        boxShadow: '0 2px 10px 0 rgba(117,117,117,0.77)'
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

      const cardText = {
        fontSize: '16px',
        fontWeight: '400',
        color: '#8E9AA',
        width: '100%',
        minWidth: '110px'
      };
      return (
        <Card
          key={d.id}
          style={cardStyle}
          onSwipeLeft={this.onSwipeLeft.bind(this)}
          onSwipeRight={this.onSwipeRight.bind(this)}
          data={d}
        >
          {d.name}
          <img className="Card__user-img" src={d.img} alt="" />
          <div style={btns}></div>
          <div>
            <p className="Card__name">
              {d.climbingStyles} | {d.preferredGrades} | {d.gear}
            </p>
            <p className="Card__bio">{d.bio}</p>
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
