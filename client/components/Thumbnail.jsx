import React from 'react';
import images from './fakeimages.js'

export default class Thumbnail extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
        const [selectedimg, setselectedimg] = useState(images[0])
        return (
            <div className='container'>

                <div>
                    {/* {images.map() */}
                    < a target="_blank" href="img_forest.jpg">
                        <img className="thumbnailimg" src="https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg" alt="Forest" />
                    </a>
                    <img className="thumbnailimgmain" src="https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg" />
                </div>

            </div >
        )
    }






}