import React from 'react';
import Thumbnail from './Thumbnail.jsx'
import Navbar from './Navbar.jsx'





export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }





  render() {

    return (
      <div>
        <div><Navbar /></div>
        <div className="inline3">
          <Thumbnail />
        </div>

      </div>
    );
  }
}