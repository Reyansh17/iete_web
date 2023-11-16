import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faHome, faInfoCircle, faComments,faHeart} from '@fortawesome/free-solid-svg-icons';
import './foooter.css';

const Footer = () => {
  return (<>
    <footer className="footer">
      <div className="footer-column">
        <h4>Contact Us</h4>
        <p><FontAwesomeIcon icon={faEnvelope} /> Email: example@example.com</p>
        <br/>
        <p><FontAwesomeIcon icon={faPhone} /> Phone: +1 123-456-7890</p>
      </div>

      <div className="footer-column">
        <h4>Quick Links</h4>
        <ul>
          <li><FontAwesomeIcon icon={faHome} /> <a href="/">Home</a></li><br/>
          <li><FontAwesomeIcon icon={faInfoCircle} /> <a href="/about">About Us</a></li><br/>
          <li><FontAwesomeIcon icon={faComments} /> <a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Follow Us</h4>
        <p>Stay connected on social media:</p>
        {/* Add your social media icons here */}
        <FontAwesomeIcon icon="fa-brands fa-facebook-f"  size='2x'/>
        <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" style={{ marginRight: '15px', color:'white'}} />
        <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
      </div>

      <div className="footer-column">
        <h4>Subscribe</h4>
        <p>Get updates and news straight to your inbox.</p>
        {/* Add a subscription form or button here */}
      </div>

    </footer>
     <div style={{color:'white', textAlign:'center',fontSize:'3vh'}}>
        <h5>Made with <FontAwesomeIcon icon={faHeart} /> by tech team</h5>
      </div>
    <div className="footer-bottom">
        <p>&copy; 2023 IETE. All rights reserved.</p>
        
      </div>
    </>
  );
};

export default Footer;
