import React from 'react';
import axios from 'axios'

export default class Styles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="styles"> <strong>styles</strong> - selected style </div>
                <div className="circle"> <span className="style"></span></div>
                <div className="circle"> <span className="style"></span></div>
                <div className="circle"> <span className="style"></span></div>
                <div className="circle"> <span className="style"></span></div>
                <div className="circle"> <span className="style"></span></div>
                <div className="circle"> <span className="style"></span></div>
                <div className="circle"> <span className="style"></span></div>
                <div className="circle"> <span className="style"></span></div>
                <div className="circle"> <span className="style"></span></div>
                <div className="circle"> <span className="style"></span></div>

                <div>

                    <select className="selectsize" name="cars" id="cars">
                        <option value="volvo">Select size</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>

                    <select className="quantity" name="cars" id="cars">
                        <option value="1">Select size</option>
                        <option value="2">Saab</option>
                        <option value="3">Opel</option>
                        <option value="4">Audi</option>
                    </select>

                    <input className="addtocart" type="submit" value="Add to cart    +" />
                </div>



            </div>


        )
    }




}