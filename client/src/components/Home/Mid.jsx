import React from 'react'
import '../Home/mid.css'
export default function Mid() {
    const eventsSectionStyle = {
    
        position: 'relative',
        textAlign: 'center',
        color: 'white',
        fontSize: '15vh',
        
      };
      const mobileEventsSectionStyle = {
        ...eventsSectionStyle,
        fontSize: '4vh',
        bottom:'0',
        
        
        
      };

    const lineStyle = {
        
        position: 'absolute',
        width: '25%',
        height: '2px',
        backgroundColor: 'white',
        top: '9vh',
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
    return (
    
    <div className="ag-format-container"  style={window.innerWidth > 600 ? eventsSectionStyle : mobileEventsSectionStyle} >
    <div style={leftLineStyle}></div>
        Why Join Us
        <div style={rightLineStyle}></div>
  <div className="ag-courses_box">
 
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
        Elevate Your Tech Proficiency Here
        </div>
       
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
        Unleash Innovation through Exciting Events
        </div>
      
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
        Hands-On Learning for All.
        </div>
        
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">Connect with Tech Enthusiasts.</div>
       
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">Explore Robotics and Beyond</div>
       
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
        Express Creativity through Designing.
        </div>
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>
        <div className="ag-courses-item_title">Transform Ideas into Reality Together.</div>
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">Hack, Learn, Create - Any Field.</div>
       
      </a>
    </div>
  </div>
</div>

    )
}
