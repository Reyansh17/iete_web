import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Home/Home.css'
import Robo from '../Robot';
import Marquee from '../../Marquee';
import Mid from './Mid';



import Footer from '../footer';
import ResponsiveCarousel from './gallery';



gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    const textElements = gsap.utils.toArray('.text');

    textElements.forEach(text => {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: 'center 80%',
          end: 'center 20%',
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className='main'>
    
    <Robo/>

    <div className="container">
      <h1 className="text">EMPOWERING <span>INNOVATORS</span></h1>
      <h1 className="text">IN<span>AI/MACHINE LEARNING</span></h1>
      <h1 className="text">ELECTRONICS<span>WEB DEVELOPMENT</span></h1>
      <h1 className="text">EXPLORE MORE<span>DEPARTMENTS</span></h1>
      <h1 className="text">CONNECT WITH US<span> LET'S CONNECT</span></h1>
    </div>
    <Mid/>
   
      {/* <div style={{fontSize:'10vh', color:'white',textAlign:'center'}}>Events</div> */}
     <ResponsiveCarousel/>
     <Marquee/>

   <Footer/>
   
    </div>
   
  );
};

export default Home;
