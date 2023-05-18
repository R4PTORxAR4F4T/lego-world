import React from 'react';

const Carasol = () => {
    return (
        <div className=''>
            <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://www.niagarainflatables.com/wp-content/uploads/2015/04/Lego-Banner.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

                {/* <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className="text-4xl font-bold">Slide 1</h2>
                <p className="text-lg">This is the first slide.</p>
                </div> */}
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://m.media-amazon.com/images/S/aplus-media/vc/8fdc02c9-1b6e-4386-bbde-ef0c6441cef7._CR0,0,970,300_PT0_SX970__.png" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                
                {/* <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className="text-4xl font-bold">Slide 1</h2>
                <p className="text-lg">This is the first slide.</p>
                </div> */}
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://www.kakuchopurei.com/wp-content/uploads/2019/02/Lego-Movie-2-Cast-.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>

                {/* <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className="text-4xl font-bold">Slide 1</h2>
                <p className="text-lg">This is the first slide.</p>
                </div> */}
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/920210/header.jpg?t=1676414649" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>

                {/* <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className="text-4xl font-bold">Slide 1</h2>
                <p className="text-lg">This is the first slide.</p>
                </div> */}
            </div>
            </div>
        </div>
    );
};

export default Carasol;