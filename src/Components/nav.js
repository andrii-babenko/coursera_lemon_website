import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookingPage from './BookingPage';
import CallToAction from './CallToAction';
import Chicago from './Chicago';
import CustomersSay from './CustomersSay';
import Homepage from './Homepage';
import Specials from './Specials';

const Nav = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/homepage">Homepage</Link>
          </li>
          <li>
            <Link to="/about">Specials</Link>
          </li>
          <br/>
          <br/>
          <li>
            <Link to="/services">BookingPage</Link>
          </li>
          <br/>
          <li>
            <Link to="/contact">Chicago</Link>
          </li>
          <li>
            <Link to="/profile">CustomersSay</Link>
          </li>
           <li>
            <Link to="/call_to_action">CallToAction</Link>
          </li>
        </ul>
      </nav>

      {/* Routes Configuration */}
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/about" element={<Specials />} />
        <Route path="/services" element={<BookingPage />} />
        <Route path="/contact" element={<Chicago />} />
        <Route path="/profile" element={<CustomersSay />} />
         <Route path="/call_to_action" element={<CallToAction />} />
      </Routes>
    </Router>
  );
};

export default Nav;
