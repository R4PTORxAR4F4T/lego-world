import React, { useEffect } from 'react';
import AOS from 'react-aos';
import 'aos/dist/aos.css';
import Carasol from '../Shared/Carasol/Carasol';
import ToyCategory from '../ToyCategory/ToyCategory';
import Gallery from '../Shared/Gallery/Gallery';
import Comming from '../Shared/Comming/Comming';
import About from '../Shared/About/About';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import useTitle from '../../hooks/useTitle';

const Home = () => {
  useTitle('Home');

//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Initialize AOS with desired options
//   }, []);

  return (
    <div className='lg:w-4/6 mx-auto'>
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
