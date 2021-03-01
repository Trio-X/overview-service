import React from 'react';
import Thumbnail from './Thumbnail.jsx'
import Navbar from './Navbar.jsx'



export default class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  // componentDidMount() {
  //   axios.get('/api/overview')
  //     .then(() => {

  //     })
  // }


  render() {
    return (
      <div>
        <div><Navbar /></div>
        <div>
          <Thumbnail />
        </div>

      </div>
    );
  }
}