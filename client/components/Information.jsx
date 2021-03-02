import React from 'react';
import StarRatings from 'react-star-ratings';
import axios from 'axios'

export default class Information extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: 2,
            category: '',
            name: '',
            price: ''
        }
    }


    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        });
    }

    componentDidMount() {
        axios.get('/api/category')
            .then(response => {
                // console.log(response.data)
                this.setState({
                    category: response.data
                })

            })
            .catch(error => {
                console.log(error)
            })

        axios.get('/api/name')
            .then(response => {
                // console.log(response.data)
                this.setState({
                    name: response.data
                })

            })
            .catch(error => {
                console.log(error)
            })
        axios.get('/api/price')
            .then(response => {
                // console.log(response.data)
                this.setState({
                    price: response.data
                })

            })
            .catch(error => {
                console.log(error)
            })
    }





    render() {
        // rating = 2;
        return (
            <div className="starsrating">
                <StarRatings
                    className="stars"
                    rating={this.state.rating}
                    starRatedColor="black"
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    name='rating'
                />
                <a className="readreview">Read all reviews</a>

                <div className="info">Category<br></br><strong>{this.state.category}</strong></div>

                <div className="info"><strong>{this.state.name}</strong></div>
                <div className="info">${this.state.price}</div>
            </div>
        );
    }
}








