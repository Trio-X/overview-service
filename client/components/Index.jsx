import React from 'react';
import Thumbnail from './Thumbnail.jsx'
import Navbar from './Navbar.jsx'
import Information from './Information.jsx'
import Styles from './Styles.jsx'




export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newimages: []
    };
  }


  changestyle(newphotos) {
    this.setState({
      newimages: newphotos
    })
  }


  render() {
    console.log(this.state.newimages)
    return (
      <div>
        <div><Navbar /></div>
        <div className="inline1">
          <Thumbnail styleimages={() => this.changestyle(this.state.newimages)} images={this.state.newimages} />
        </div>
        <div className="inline2">
          <Information />
          <Styles styleimages={(newphotos) => this.changestyle(newphotos)} />
        </div>
      </div>
    );
  }
}