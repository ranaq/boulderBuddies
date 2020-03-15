import React from 'react';
import { geolocated } from 'react-geolocated';
import Geo from './Geo';

class FindMe extends React.Component {
  render() {
    <Geo {...this.props} />;
    return (
      <div>
        <h3>Your location:</h3>
        <p>
          {this.props.coords && this.props.coords.latitude},
          {this.props.coords && this.props.coords.longitude}
        </p>
      </div>
    );
  }
}
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(FindMe);
