import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Home/Home.css'
import Robo from '../Robot';


gsap.registerPlugin(ScrollTrigger);

const TextEffectComponent = () => {
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
      <h1 className="text">EXPLORE MORE<span><a href="#" target="_blank" rel="noopener noreferrer">DEPARTMENTS</a></span></h1>
      <h1 className="text">CONNECT WITH US<span><a href="#" target="_blank" rel="noopener noreferrer">LET'S CONNECT</a></span></h1>
    </div>
    </div>
  );
};

export default TextEffectComponent;
