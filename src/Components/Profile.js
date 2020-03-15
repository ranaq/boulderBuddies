import React, { Component } from 'react';
import './Profile.css';
import { geolocated } from 'react-geolocated';
import Geo from './Geo';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.me.email || '',
      password: this.props.me.password,
      climbingStyles: this.props.me.climbingStyles,
      preferredGrades: this.props.me.preferredGrades,
      zipCode: this.props.me.zipCode,
      phoneNumber: this.props.me.phoneNumber,
      bio: this.props.me.bio,
      img: this.props.me.img,
      gear: this.props.me.gear,
      coords: {}
    };
    console.log('props in profile', this.props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
      climbingStyles: this.state.climbingStyles,
      preferredGrades: this.state.preferredGrades,
      zipCode: this.state.zipCode,
      phoneNumber: this.state.phoneNumber,
      bio: this.state.bio,
      img: this.state.img,
      gear: this.state.gear
    };
  };

  // handleChange(evt) {
  //   this.setState({
  //     [evt.target.name]: evt.target.value
  //   });
  // }

  renderUpdateMessage = () => {
    return this.state.updated ? (
      <div className="update-text">Updated</div>
    ) : null;
  };

  // addToCartNotification(productName, quantity) {
  //   const toastHTML = `
  //     <div>
  //      in your cart
  //     </div>`;
  //   Materialize.toast({
  //     html: toastHTML
  //   });
  // }
  render() {
    const cardStyle = {
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
      transform: 'translateY(-35px)',
      color: 'black',
      boxShadow: '0 2px 10px 0 rgba(117,117,117,0.77)'
    };

    <Geo {...this.props} />;
    return (
      <div style={{ color: 'teal' }}>
        <div>
          <div>
            <form style={{ padding: '20px' }}>
              <div>
                <div>
                  Email
                  <input
                    className="input-form"
                    style={{ padding: '2px 2px' }}
                    type="text"
                    name="profile-name"
                    id="profile-name"
                    value={this.state.email}
                    placeholder="Email"
                    onChange={evt => this.setState({ email: evt.target.value })}
                  ></input>
                </div>
                <div>
                  Gear
                  <input
                    className="input-form"
                    style={{ padding: '2px 2px' }}
                    type="text"
                    name="profile-name"
                    // id="profile-bio"
                    value={this.state.gear}
                    placeholder="Gear"
                    onChange={evt => this.setState({ name: evt.target.value })}
                  ></input>
                </div>
                <div>
                  Climbing styles
                  <input
                    className="input-form"
                    style={{ padding: '2px 2px' }}
                    type="text"
                    name="profile-name"
                    id="profile-name"
                    value={this.state.climbingStyles}
                    placeholder="Climbing styles"
                    onChange={evt => this.setState({ name: evt.target.value })}
                  ></input>
                </div>
                <div>
                  Grades
                  <input
                    style={{ padding: '2px 2px' }}
                    className="input-form"
                    type="text"
                    name="profile-bio"
                    id="profile-bio"
                    value={this.state.preferredGrades}
                    placeholder=" "
                    onChange={evt => this.setState({ name: evt.target.value })}
                  ></input>
                </div>
                <div>
                  Bio
                  <textarea
                    className="Profile__Form__user-inputs__bio"
                    type="text"
                    name="profile-bio"
                    // id="profile-bio"
                    value={this.state.bio}
                    placeholder="Write a short bio!"
                    onChange={evt => this.setState({ name: evt.target.value })}
                  ></textarea>
                </div>
              </div>
              <hr />
              <div className="Profile__Form__button-container">
                <button
                  className="button-submit"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Profile);
