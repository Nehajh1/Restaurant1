import React from 'react';
import './App.css';

import logo2 from './assets/Logo/techcrunch.png'
import logo3 from './assets/Logo/business-insider.png'
import logo4 from './assets/Logo/the-new-york-times.png'
import logo5 from './assets/Logo/forbes.png'
import logo6 from './assets/Logo/usa-today.png'
import Image from './assets/Image/phoneScreen.png'

function Feature() {
    return(
        <div id='Page'>
            <section id="page2">
        <div className="page2-container">
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span className="hamburger-icon"></span>
          </label>

          <section className="page2-featured-in">
            <p className="page2-featured-text">AS FEATURED IN</p>
            <div className="page2-logos">
              <img src={logo2} alt="TechCrunch Logo" className="page2-logo1" />
              <img src={logo3}  alt="Business Insider Logo" className="page2-logo2" />
              <img src={logo4}  alt="New York Times Logo" className="page2-logo3" />
              <img src={logo5}  alt="Forbes Logo" className="page2-logo4" />
              <img src={logo6}  alt="USA Today Logo" className="page2-logo5" />
            </div>
          </section>

          <section className="page2-how-it-works">
            <p className="page2-section-label">HOW IT WORKS</p>
            <h2 className="page2-heading">Your daily dose of health in 3 simple steps</h2>
            <div className="page2-step-content">
              <div className="page2-step-text">
                <span className="page2-step-number">01</span>
                <h3>Tell us what you like (and what not)</h3>
                <p>Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!</p>
              </div>
              <div className="page2-step-image">
                <img src={Image} alt="Phone showing food preferences" />
              </div>
            </div>
          </section>
        </div>
      </section>

        </div>
    );
}

export default Feature;