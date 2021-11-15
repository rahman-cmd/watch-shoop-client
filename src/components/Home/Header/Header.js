import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../Navbar/Navbar';
import Typical from 'react-typical'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <NavBar></NavBar>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="text-white text-center moto">
          <h1 className='mt-5 h1'><b>THE BEST WATCHSHOP SITE IN THE WORLD</b><span className='span'></span></h1>
          <h2 className='mt-5 h2'><b><Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              'WE SEEL BEST',
              1000,
              'PRODUCTS SINCE 2020',
              1000,
              'RUNNING HEALTH APPLICATIONS',
              1000,
              'TRACKING STEPS',
              1000,
              'TRACKING HEART RATE',
              1000,
              'SLEEP MONITORING',
              1000,
            ]}
          /></b><span className='span'></span></h2>
          <Link to="/explore"><Button variant="primary" type="submit">Explore All</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;