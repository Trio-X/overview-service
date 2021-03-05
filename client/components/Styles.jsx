import React from "react";
import axios from "axios";
import swal from 'sweetalert';

export default class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: [],
      onestyle: [],
      name: "black",
      bag: []
    };
  }
  //! get all styles :
  componentDidMount() {
    axios
      .get("http://159.89.4.210:3001/overview/api/styles")
      .then((response) => {
        this.setState({
          style: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      })
    axios.get('http://159.89.4.210:3001/overview/api/q')
      .then(response => {
        this.setState({
          onestyle: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  //!change style name :
  f(name) {
    this.setState({
      name: name,
    });
  }

  handelchange(e) {
    this.setState({
      bag: [{ quantity: e.target.value }]
    })
  }



  //!add to cart :
  addCart() {
    console.log(this.state.bag)
    swal('Added product to the card successfully')
    swal({
      title: "'Added product to the cart successfully'",
      text: "'Added product to the cart successfully'",
      icon: "success",
    })
  }

  render() {

    return (

      < div >
        <div className="styles">
          <strong>styles</strong> > {this.state.name}
        </div>
        {
          this.state.style.map((styleid, index) => (
            <div key={index} id={styleid.style_id} className="circle">
              <div onClick={() => this.f(styleid.name)}>
                <span
                  onClick={() => this.props.styleimages(styleid.photos)}
                  style={{ background: `${styleid.name}` }}
                  className="style"
                ></span>
              </div>
            </div>
          ))
        }
        < div >
          <select onChange={(e) => this.handelchange(e)} className="selectsize" name="cars" id="cars">
            <option value="Select size">Select size</option>
            {this.state.onestyle.map((styleid, index) => (
              <option key={index} value={styleid[index].size}>{styleid[index].size}</option>
            ))}
          </select>
          <select onChange={(e) => this.handelchange(e)} className="quantity" name="cars" id="cars">
            <option value="1">1</option>
            {this.state.onestyle.map((styleid, index) => (
              <option key={index} value={styleid[index].quantity}>{styleid[index].quantity}</option>
            ))}
          </select>
          <input onClick={(e) => this.addCart(e)} className="addtocart" type="submit" value="Add to cart    +" />
        </div >
      </div >
    );
  }
}
