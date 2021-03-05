import React from "react";
import StarRatings from "react-star-ratings";
import axios from "axios";

export default class Information extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      category: "",
      name: "",
      price: "",
    };
  }
  //!change rating function:
  changeRating(newRating, name) {
    this.setState({
      rating: newRating,
    });
  }
  //!getting product information data:
  componentDidMount() {
    axios
      .get("http://159.89.4.210:3001/overview/api/category")
      .then((response) => {
        this.setState({
          category: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://159.89.4.210:3001/overview/api/name")
      .then((response) => {
        this.setState({
          name: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://159.89.4.210:3001/overview/api/price")
      .then((response) => {
        this.setState({
          price: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://159.89.4.210:3001/overview/api/rating")
      .then((response) => {
        this.setState({
          rating: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="starsrating">
        <div className="stars">
          <StarRatings
            className="stars"
            rating={this.state.rating}
            numberOfStars={5}
            name="rating"
            starDimension="40px"
            starSpacing="5px"
          />
          <a className="readreview">Read all reviews</a>
        </div>
        <div className="info">
          Category<br></br>
          <strong>{this.state.category}</strong>
        </div>
        <div className="info">
          <strong>{this.state.name}</strong>
        </div>
        <div className="price">${this.state.price}</div>
      </div>
    );
  }
}
