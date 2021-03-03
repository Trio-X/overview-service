import React from 'react';
import axios from 'axios'

export default class Styles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: [],
            onestyle: [],
            name: 'black'


        }
    }

    //! get styles :
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


    f(name) {
        this.setState({
            name: name
        })
    }



    render() {
        console.log(this.state.style)
        return (
            <div>

                <div className="styles"> <strong>styles</strong> > {this.state.name} </div>
                {this.state.style.map((styleid, index) => (
                    <div key={index} id={styleid.style_id} className="circle"> <div onClick={() => this.f(styleid.name)}><span onClick={() => this.props.styleimages(styleid.photos)} style={{ background: `${styleid.name}` }} className="style"></span></div></div>
                ))}
                <div>

                    <select className="selectsize" name="cars" id="cars">
                        <option value="volvo">Select size</option>
                        {this.state.style.map((styleid, index) => (
                            <option key={index} value="saab">{styleid.style_id}</option>
                        ))}
                    </select>

                    <select className="quantity" name="cars" id="cars">
                        <option value="1">1</option>
                        <option value="2">8</option>
                        <option value="3">16</option>
                        <option value="4">18</option>
                    </select>

                    <input className="addtocart" type="submit" value="Add to cart    +" />
                </div>



            </div>


        )
    }




}