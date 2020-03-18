import React, { Fragment } from 'react';
import { geolocated } from 'react-geolocated';
import './Profile.css';
import { Card, CardWrapper } from 'react-swipeable-cards';

function distance(lat1, lon1, lat2, lon2, unit) {
  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  } else {
    console.log('coords in dist', lat1, lon1, lat2, lon2);
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == 'K') {
      dist = dist * 1.609344;
    }
    if (unit == 'N') {
      dist = dist * 0.8684;
    }
    return dist;
  }
}
// function usersNearMe(props) {
//   const me = props.me;
//   const users = props.users;
//   for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     if (
//       distance(
//         user.coords.lat,
//         user.coords.lon,
//         me.coords.lat,
//         me.coords.long
//       ) > 1
//     ) {
//       console.log('userNearMe', user);
//       return 'nearMe';
//     }
//   }
// }
let prospectiveMatches = [];
let Loc = props => {
  const me = props.me;
  const users = props.users;
  if (props.coords) {
    props.me.coords.latitude = props.coords.latitude;
    props.me.coords.longitude = props.coords.longitude;
    console.log('me after coords', props.me.coords);
  }
  if (props.coords) { 
    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      console.log('userNearMe', user);
      let dist = distance(
        user.coords.latitude,
        user.coords.longitude,
        me.coords.latitude,
        me.coords.longitude,
        'M'
      );

      if (dist < 5) {
        prospectiveMatches.push(user);
      }
      console.log('dist', dist, 'pM', prospectiveMatches);
    }
  }
  console.log('props in FindMe', props);
  return (
    <Fragment>
      <div className="flex-container">
        <div className="Profile">
          <form className="input-form">
            <div>
              My location: {props.me.coords.latitude},
              {props.me.coords.longitude}
            </div>
            <div>Climbers near me: {prospectiveMatches.length}</div>
            {/* <div> {usersNearMe()}</div> */}
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Loc = geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Loc);

export default Loc;
