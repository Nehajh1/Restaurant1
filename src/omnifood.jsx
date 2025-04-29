import React from 'react';
import './App.css';

import logo from "./assets/Logo/logo.png"
import profile1 from './assets/Profile Pictures/profile1.jpg';
import profile2 from './assets/Profile Pictures/profile2.jpg';
import profile3 from './assets/Profile Pictures/profile3.jpg';
import profile4 from './assets/Profile Pictures/profile4.jpg';
import profile5 from './assets/Profile Pictures/profile5.jpg';
import profile6 from './assets/Profile Pictures/profile6.jpg';
import heroImage from './assets/Profile Pictures/hero.png';

function Omnifood() {
    return(
        <div id='Page'>
            <section id='page1'>
      <header className="page1-header">
        <div className="page1-logo">
          <img src={logo} alt="Omnifood Logo" />
        </div>
        <div className="page1-list">
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span className="hamburger-icon"></span>
          </label>

          <nav className="page1-main-nav">
            <ul className="page1-main-nav-list">
              <li><a href="">How it works</a></li>
              <li><a href="">Meals</a></li>
              <li><a href="">Testimonials</a></li>
              <li><a href="">Pricing</a></li>
              <li><a className="page1-nav-cta" href="">Try for free</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="page1-section-hero">
        <div className="page1-hero">
          <div className="page1-hero-text-box">
            <h1 className="page1-heading-primary">A healthy meal delivered to your door, every single day</h1>
            <p className="page1-hero-description">
              The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.
            </p>
            <div className="page1-hero-buttons">
              <a href="" className="page1-btn page1-btn--full">Start eating well</a>
              <a href="" className="page1-btn page1-btn--outline">Learn more ↓</a>
            </div>
            <div className="page1-delivered-meals">
              <div className="page1-delivered-imgs">
                <img src={profile1} alt="User photo 1" />
                <img src={profile2} alt="User photo 2" />
                <img src={profile3} alt="User photo 3" />
                <img src={profile4} alt="User photo 4" />
                <img src={profile5} alt="User photo 5" />
                <img src={profile6} alt="User photo 6" />
              </div>
              <p className="page1-delivered-text"><strong>250,000+</strong> meals delivered last year!</p>
            </div>
          </div>
          <div className="page1-hero-img-box">
            <img src={heroImage} className="page1-hero-img page1-img-meal2" alt="Meal 2" />
          </div>
        </div>
      </section>
      </section>
        </div>
    );
}

export default Omnifood;