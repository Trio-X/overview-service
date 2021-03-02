import React from 'react';
import Thumbnail from './Thumbnail.jsx'
import Navbar from './Navbar.jsx'
import Information from './Information.jsx'
import Styles from './Styles.jsx'




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
        <div className="inline1">
          <Thumbnail />
        </div>
        <div className="inline2">
          <Information />
          <Styles />
        </div>



      </div>
    );
  }
}