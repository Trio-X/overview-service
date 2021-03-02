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
            </div>
        )
    }




}