import React from 'react';
import Thumbnail from './Thumbnail.jsx'
import Navbar from './Navbar.jsx'
import MyGallery from './Carousel.jsx'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }


  render() {
    return (
      <div>
        <div><Navbar /></div>
        <div>
          <Thumbnail />
        </div>
        <div> <MyGallery /></div>
      </div>
    );
  }
}