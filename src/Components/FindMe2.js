import React from 'react';
import { geolocated } from 'react-geolocated';

const Test = props => {
  const me = props.me;
  console.log();
  return (
    <Fragment>
      <h2>Profile</h2>
      <ol>
        {/* {arr.map(doctor => {
          return (
            <li key={doctor.index}>
              <p> Name: {doctor.name}</p>
              <p>Accepting new patients: {doctor.newPatients ? 'Yes' : 'No'}</p>
              <p>City: {doctor.address.city}</p>
              <p>State: {doctor.address.state_long}</p>
              <p>Street: {doctor.address.street}</p>
              <p> Zip Code: {doctor.address.zip}</p>
              <p> Phone: {doctor.phone} </p>
            </li>
          );
        })} */}
      </ol>
    </Fragment>
  );
};

Test = geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Test);

export default Test;
