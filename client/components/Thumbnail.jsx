import React from 'react';
import axios from 'axios'


export default class Thumbnail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            show: false
        }
    }



    componentDidMount() {
        axios.get('/api/products')
            .then(response => {
                // console.log(response.data)
                this.setState({
                    images: response.data,
                    show: true
                })
                // console.log(this.state.pokemons)
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {

        jQuery(document).ready(function ($) {

            $('#myCarousel').carousel({
                interval: 50000
            });

            //Handles the carousel thumbnails
            $('[id^=carousel-selector-]').click(function () {
                var id_selector = $(this).attr("id");
                try {
                    var id = /-(\d+)$/.exec(id_selector)[1];
                    console.log(id_selector, id);
                    jQuery('#myCarousel').carousel(parseInt(id));
                } catch (e) {
                    console.log('Regex failed!', e);

                }
            });
            // When the carousel slides, auto update the text
            $('#myCarousel').on('slid.bs.carousel', function (e) {
                var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-' + id).html());
            });
        });

        console.log(this.state.images)

        return (
            <div className="container">
                {this.state.show ? (
                    <div id="main_area">
                        <div className="row">
                            <div className="col-sm-3" id="slider-thumbs">
                                < ul className="hide-bullets" >
                                    <li className="col-sm-12">
                                        <a className="thumbnail" id="carousel-selector-0">
                                            <img src={this.state.images[0].thumbnail_url} />
                                        </a>
                                    </li>
                                    {this.state.images.slice(1).map((imge, index) => (
                                        <li key={index} className="col-sm-12">
                                            <a className="thumbnail" id={`carousel-selector-${index + 1}`}>
                                                <img src={imge.thumbnail_url} />
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                            <div className="col-sm-8">
                                <div className="col-xs-12" id="slider">

                                    <div className="row">
                                        <div className="col-sm-12" id="carousel-bounding-box">
                                            <div className="carousel slide" id="myCarousel">

                                                <div className="carousel-inner">

                                                    <div className="active item" data-slide-number="0">
                                                        <img src={this.state.images[0].thumbnail_url} /></div>

                                                    {this.state.images.slice(1).map((imge, index) => (

                                                        <div key={index + 1} className="item" data-slide-number={`${index + 1}`}>

                                                            <img className="imgnapil" src={imge.thumbnail_url} /></div>

                                                    ))}


                                                </div>



                                                <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                                                    <span className="glyphicon glyphicon-chevron-left"></span>
                                                </a>
                                                <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                                                    <span className="glyphicon glyphicon-chevron-right"></span>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                ) : null}
            </div >

        )
    }






}