import React from "react";
import './App.css'

import Image1 from './assets/Image/avocado salad.jpg'
import Image2 from './assets/Image/japanese gyoza.jpeg'
import logo7 from './assets/Logo/calories.jpg'
import logo8 from './assets/Logo/neutriscore.png'
import logo9 from './assets/Logo/rate.avif'

function Meal() {
    return(
        <div id="page">
            <section id="page3">
        <div className="page3-container">
          <div className="page3-header">
            <p>Meals</p>
            <h1>Omnifood AI chooses from <span>5,000+</span> recipes</h1>
          </div>

          <div className="page3-main-content">
            <div className="page3-recipes">
              <div className="page3-recipe-card">
                <img src={Image1} alt="Japanese Gyoza" />
                <div className="page3-content">
                  <span className="page3-label">VEGETARIAN</span>
                  <h3>Japanese Gyoza</h3>
                  <div className="page3-info">
                    <span><img src={logo7} alt="Calories" />650 calories</span>
                    <span><img src={logo8} alt="NutriScore" /> NutriScore ®<strong>74</strong></span>
                    <span><img src={logo9} alt="Star" /> 4.9 rating (537)</span>
                  </div>
                </div>
              </div>
              <div className="page3-recipe-card">
                <img src={Image2} alt="Avocado Salad" />
                <div className="page3-content">
                  <span className="page3-label">VEGAN</span>
                  <span className="page3-label-paleo">PALEO</span>
                  <h3>Avocado Salad</h3>
                  <div className="page3-info">
                    <span><img src={logo7} alt="Calories" />400 calories</span>
                    <span><img src={logo8} alt="NutriScore" /> NutriScore ® 92</span>
                    <span><img src={logo9} alt="Star" /> 4.8 rating (441)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="page3-sidebar">
              <h3>Works with any diet:</h3>
              <ul>
                <li className="page3-feature-item">Vegetarian</li>
                <li className="page3-feature-item">Vegan</li>
                <li className="page3-feature-item">Pescatarian</li>
                <li className="page3-feature-item">Gluten-free</li>
                <li className="page3-feature-item">Lactose-free</li>
                <li className="page3-feature-item">Keto</li>
                <li className="page3-feature-item">Paleo</li>
                <li className="page3-feature-item">Low FODMAP</li>
                <li className="page3-feature-item">Kid-friendly</li>
              </ul>
            </div>
          </div>

          <div className="page3-footer">
            <a href="">See all recipes →</a>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Meal;