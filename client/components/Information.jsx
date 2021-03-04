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
      .get("http://localhost:3001/overview/api/category")
      .then((response) => {
        // console.log(response.data)
        this.setState({
          category: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:3001/overview/api/name")
      .then((response) => {
        // console.log(response.data)
        this.setState({
          name: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:3001/overview/api/price")
      .then((response) => {
        // console.log(response.data)
        this.setState({
          price: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:3001/overview/api/rating")
      .then((response) => {
        // console.log(response.data)
        this.setState({
          rating: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    // rating = 2;
    return (
      <div className="starsrating">
        <div className="stars">
          <StarRatings
            className="stars"
            rating={this.state.rating}
            // starRatedColor="black"
            // changeRating={this.changeRating}
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
