import React ,{ useEffect, useState }from 'react';
import Carasol from '../Shared/Carasol/Carasol';
import AllToy from '../AllToy/AllToy';
import ToyCategory from '../ToyCategory/ToyCategory';
import Gallery from '../Shared/Gallery/Gallery';


const Home = () => {

    

    // console.log(alltoys);

    return (
        <div className='w-4/6 mx-auto'>
            <Carasol></Carasol>
            <Gallery></Gallery>
            <ToyCategory></ToyCategory>
        </div>
    );
};

export default Home;