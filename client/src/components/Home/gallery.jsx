import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../assets/hack.png';
import img2 from '../../assets/hack.png';
import img3 from '../../assets/hack.png';

const eventsSectionStyle = {
  position: 'relative',
  textAlign: 'center',
  color: 'white',
  fontSize: '15vh',
  margin: '50px 0',
};

const lineStyle = {
  position: 'absolute',
  width: '35%',
  height: '2px',
  backgroundColor: 'white',
  top: '50%',
  transform: 'translateY(-50%)',
};

const leftLineStyle = {
  ...lineStyle,
  left: '0',
};

const rightLineStyle = {
  ...lineStyle,
  right: '0',
};


const ResponsiveCarousel = () => {
  const carouselStyle = {
    maxWidth: '100%', 
    margin: 'auto',
    position: 'relative',
  };

  const mobileEventsSectionStyle = {
    ...eventsSectionStyle,
    fontSize: '4vh',
    bottom:'0',
    
    
    
  };

  return (
    <div style={carouselStyle}>
      <div style={window.innerWidth > 600 ? eventsSectionStyle : mobileEventsSectionStyle}>
        <div style={leftLineStyle}></div>
        Events
        <div style={rightLineStyle}></div>
      </div>
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        autoPlay
        interval={3000}
        infiniteLoop
        swipeable
        dynamicHeight
      >
        <div>
          <img alt="Image 1" src={img1} />
          <p className="legend" style={{ color: '#fff' }}>
            Intra Hackathon
          </p>
        </div>
        <div>
          <img alt="Image 2" src={img2} />
          <p className="legend" style={{ color: '#fff' }}>
          Intra Hackathon
          </p>
        </div>
        <div>
          <img alt="Image 3" src={img3} />
          <p className="legend" style={{ color: '#fff' }}>
          Intra Hackathon
          </p>
        </div>
        {/* Add more slides as needed */}
      </Carousel>
     
    </div>
  );
};

export default ResponsiveCarousel;
