import React ,{ useEffect, useState }from 'react';
import Carasol from '../Shared/Carasol/Carasol';
import AllToy from '../AllToy/AllToy';
import ToyCategory from '../ToyCategory/ToyCategory';
import Gallery from '../Shared/Gallery/Gallery';
import Comming from '../Shared/Comming/Comming';
import About from '../Shared/About/About';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';


const Home = () => {

    

    // console.log(alltoys);

    return (
        <div className='lg:w-4/6 mx-auto '>
            <Header></Header>
            <Carasol></Carasol>
            <Gallery></Gallery>
            <ToyCategory></ToyCategory>
            <Comming></Comming>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;