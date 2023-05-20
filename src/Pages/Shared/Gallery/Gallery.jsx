import React from 'react';
import './Gallery.css'

const Gallery = () => {
    return (
        <div>
            <div className="header border-white border-b mb-12 p-0">
                <p className='text-4xl text-center mb-1 '>Gallery</p>
                <p>The unique Build by our customers</p>
            </div>
            <div className='row'>
                <div className="column">
                    <img src="https://www.brickfanatics.com/wp-content/uploads/2022/12/LEGOMOCLOC-LEGO-Rivendell-featured.png" />
                    <img src="https://bestlifeonline.com/wp-content/uploads/sites/3/2018/08/starship-OSS-pontbriand.-legos.jpg?resize=500,375&quality=82&strip=all" />
                    <img src="https://bestlifeonline.com/wp-content/uploads/sites/3/2018/08/allianz-arena-legos.jpg?resize=500,281&quality=82&strip=all" />
                    <img src="https://bestlifeonline.com/wp-content/uploads/sites/3/2018/08/lego-giraffe.jpg?resize=500,395&quality=82&strip=all" />
                    <img src="https://bestlifeonline.com/wp-content/uploads/sites/3/2018/08/lego_aircraft_carrier.jpg?resize=500,294&quality=82&strip=all" />
                </div>
                <div className="column">
                    <img src="https://bestlifeonline.com/wp-content/uploads/sites/3/2018/08/lego-montmartre.jpg?resize=500,281&quality=82&strip=all" />
                    <img src="https://bestlifeonline.com/wp-content/uploads/sites/3/2018/08/airport-made-out-of-legos.jpg?resize=500,335&quality=82&strip=all" />
                    <img src="https://bestlifeonline.com/wp-content/uploads/sites/3/2018/08/titanic-made-from-legos.jpg?resize=500,281&quality=82&strip=all" />
                    <img src="https://bestlifeonline.com/wp-content/uploads/sites/3/2018/08/polar-bear-made-of-legos.jpg?resize=500,371&quality=82&strip=all" />
                </div>  
                <div className="column">
                    <img src="https://bestlifeonline.com/wp-content/uploads/sites/3/2018/08/herobot-9000.jpg?resize=500,668&quality=82&strip=all" />
                    <img src="https://bestlifeonline.com/wp-content/uploads/sites/3/2018/08/airplane-made-of-legos.jpg?resize=500,254&quality=82&strip=all" />
                    <img src="https://bestlifeonline.com/wp-content/uploads/sites/3/2018/08/lego-montmartre.jpg?resize=500,281&quality=82&strip=all" />
                    <img src="https://bestlifeonline.com/wp-content/uploads/sites/3/2018/08/obama-presidential-inauguration-legos.jpg?resize=500,281&quality=82&strip=all" />
                </div>
                <div className="column">
                    <img src="https://bestlifeonline.com/wp-content/uploads/sites/3/2018/08/london-eye-legoland.jpg?quality=82&strip=1&resize=640%2C360" />
                    <img src="https://bestlifeonline.com/wp-content/uploads/sites/3/2018/08/obama-presidential-inauguration-legos.jpg?resize=500,281&quality=82&strip=all" />
                    <img src="https://bestlifeonline.com/wp-content/uploads/sites/3/2018/08/mona-lisa-legos.jpg?resize=500,281&quality=82&strip=all" />
                    <img src="https://ideascdn.lego.com/media/generate/lego_ci/8c4eaed1-f216-40af-a91b-3216e71e7374/resize:950:633/legacy" />
                    <img src="https://www.brickfanatics.com/wp-content/uploads/LEGO-Pokemon-featured.jpg" />
                </div>
            </div>

            
        </div>
    );
};

export default Gallery;