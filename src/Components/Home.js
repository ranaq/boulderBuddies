import React, { Component } from 'react';
import 'jquery';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';
import '../App.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
<Carousel responsive={responsive}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>;

class Home extends Component {
  render() {
    return (
      <div>
        <Carousel
          swipeable={false}
          draggable={false}
          // showDots={true}
          responsive={responsive}
          // ssr={true} // means to render carousel on server-side.
          // infinite={true}
          // // autoPlay={this.props.deviceType !== 'mobile' ? true : false}
          // // autoPlaySpeed={1000}
          // keyBoardControl={true}
          // customTransition="all .5"
          // transitionDuration={500}
          // containerClass="carousel-container"
          // removeArrowOnDeviceType={['tablet', 'mobile']}
          // deviceType={this.props.deviceType}
          // // dotListClass="custom-dot-list-style"
          // itemClass="carousel-item-padding-10-px"
        >
          <div>
            Item 1
            <div className="row">
              <div className="col s12 m6">
                <div className="card" width="60px">
                  <div className="card-image">
                    <img
                      src="trad_dad.jpeg"
                      alt="
                      "
                    />
                    <a className="btn-floating  waves-effect waves-light blue">
                      <i className="material-icons">delete</i>
                    </a>
                    <button
                      type="submit"
                      className="btn-floating btn waves-effect waves-light blue"
                    >
                      <i className="material-icons">add</i>
                    </button>
                  </div>
                  <div className="card-content">
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            Item 2
            <div className="row">
              <div className="col s12 m6">
                <div className="card">
                  <div className="card-image">
                    <img src="blonde_girl.jpeg" alt="" />

                    <a className="btn-floating halfway-fab waves-effect waves-light red">
                      <i className="material-icons">add</i>
                    </a>
                  </div>
                  <div className="card-content">
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            Item 3
            <div className="row">
              <div className="col s12 m6">
                <div className="card">
                  <div className="card-image">
                    <img src="guy1.jpeg" alt="" />

                    <a className="btn-floating halfway-fab waves-effect waves-light red">
                      <i className="material-icons">add</i>
                    </a>
                    <a className="btn-floating  waves-effect waves-light red">
                      <i className="material-icons">delete</i>
                    </a>
                  </div>
                  <div className="card-content">
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            Item 4
            <div className="row">
              <div className="col s12 m6">
                <div className="card">
                  <div className="card-image">
                    <img src="brownHair_girl.jpeg" alt="" />

                    <a className="btn-floating halfway-fab waves-effect waves-light red">
                      <i className="material-icons">add</i>
                    </a>
                    <a className="btn-floating  waves-effect waves-light red">
                      <i className="material-icons">delete</i>
                    </a>
                  </div>
                  <div className="card-content">
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Home;
