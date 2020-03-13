import React from 'react';
import { geolocated } from 'react-geolocated';
import Geo from './Geo';

class FindMe extends React.Component {
  render() {
    return (
      <div>
        <h1>hello world </h1>
        <p>{this.props.coords && this.props.coords.latitude}</p>
        <Geo {...this.props} />
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
