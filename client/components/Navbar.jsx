import React from 'react';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {

        return (
            <div>
                <div className="navbar navbar-default" >
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#"> <img className='logo' src="https://hungamadeal.co.in/wp-content/uploads/2020/06/freesnippingtool.com_capture_20200620213653.png" style={{ width: 130 }} />

                        </a>
                    </div>
                    <div className="navbar-collapse collapse navbar-responsive-collapse">
                        <form className="navbar-form-navbar-left">
                            <input type="text" className="form-control-col-lg-8" placeholder="Search" />
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>



                <div className="alert">
                    <span className="closebtn" >&times;</span>
                    <strong>Announcement !</strong> Sale/Discount <strong> offer.</strong>
                </div>

            </div >

        )
    }






}