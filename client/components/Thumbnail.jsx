import React from 'react';

export default class Thumbnail extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {

        return (
            <div className='container'>
                <img className="thumbnailimgmain" src="https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg" />
                <div>
                    <a target="_blank" href="img_forest.jpg">
                        <img className="thumbnailimg" src="https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg" alt="Forest" />
                    </a>
                    <a target="_blank" href="img_forest.jpg">
                        <img className="thumbnailimg" src="https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg" alt="Forest" />
                    </a>

                </div>
            </div>
        )
    }






}