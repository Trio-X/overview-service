import React from 'react';
import axios from 'axios'

export default class Styles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: [],
            onestyle: []


        }
    }

    componentDidMount() {
        axios.get('/api/styles')
            .then(response => {
                // console.log(response.data)
                this.setState({
                    style: response.data
                })

            })
            .catch(error => {
                console.log(error)
            })
    }






    render() {
        console.log(this.state.style)
        return (
            <div>

                <div className="styles"> <strong>styles</strong> - selected style </div>
                {this.state.style.map((styleid, index) => (
                    <div key={index} id={styleid.style_id} className="circle"> <span onClick={() => this.props.styleimages(styleid.photos)} style={{ background: `${styleid.name}` }} className="style"></span></div>
                ))}
                <div>

                    <select className="selectsize" name="cars" id="cars">
                        <option value="volvo">Select quantity</option>
                        {this.state.style.map((styleid, index) => (
                            <option value="saab">{styleid.style_id}</option>
                        ))}
                    </select>

                    <select className="quantity" name="cars" id="cars">
                        <option value="1">Select size</option>
                        <option value="2">xs</option>
                        <option value="3">xl</option>
                        <option value="4">xxl</option>
                    </select>

                    <input className="addtocart" type="submit" value="Add to cart    +" />
                </div>



            </div>


        )
    }




}