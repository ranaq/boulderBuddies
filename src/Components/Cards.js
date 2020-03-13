import { Card, CardWrapper } from 'react-swipeable-cards';
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';

export default class Example extends Component {
  onSwipe(data) {
    console.log(data.email + ' was swiped.');
  }
  onSwipeLeft(data) {
    console.log('I was swiped left.');
  }
  onSwipeRight() {
    const me = this.props.me;
    const userToUpdate = this.props.users.filter(user => {
      user.id === me.id;
    });
    console.log('meId', me.id, 'userToUp', userToUpdate);
  }
  renderCards() {
    console.log('props in Cards', this.props);
    const data = this.props.users;
    const me = this.props.me;
    console.log('data in Cards', data);
    return this.props.users.map(d => {
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
      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <Card
          responsive={responsive}
          key={d.id}
          style={cardStyle}
          onSwipe={this.onSwipe.bind(this)}
          onSwipeLeft={this.onSwipeLeft.bind(this)}
          onSwipeRight={this.onSwipeRight.bind(this)}
          // data={d}
        >
          {d.name}
          <img style={cardImage} src={d.img} alt="" />
          <div style={btns}>
            <button
              type="button"
              onClick={() => console.log('onClick')}
              className="btn-floating waves-effect waves-light orange"
            >
              <i className="material-icons">remove</i>
            </button>
            <button
              type="button"
              onClick={() => this.onSwipeRight(d.id)}
              className="btn-floating waves-effect waves-light orange"
            >
              <i className="material-icons">add</i>
            </button>
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
