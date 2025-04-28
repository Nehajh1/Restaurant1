import React from 'react';
import logo from './assets/Logo/logo.png';
import profile1 from './assets/Profile Pictures/profile1.jpg';
import profile2 from './assets/Profile Pictures/profile2.jpg';
import profile3 from './assets/Profile Pictures/profile3.jpg';
import profile4 from './assets/Profile Pictures/profile4.jpg';
import profile5 from './assets/Profile Pictures/profile5.jpg';
import profile6 from './assets/Profile Pictures/profile6.jpg';
import heroImage from './assets/Profile Pictures/hero.png';
import logo2 from './assets/Logo/techcrunch.png'
import logo3 from './assets/Logo/business-insider.png'
import logo4 from './assets/Logo/the-new-york-times.png'
import logo5 from './assets/Logo/forbes.png'
import logo6 from './assets/Logo/usa-today.png'
import Image from './assets/Image/phoneScreen.png'
import Image1 from './assets/Image/avocado salad.jpg'
import Image2 from './assets/Image/japanese gyoza.jpeg'
import logo7 from './assets/Logo/calories.jpg'
import logo8 from './assets/Logo/neutriscore.png'
import logo9 from './assets/Logo/rate.avif'
import Gallery1 from './assets/Image/gallery-1.jpg'
import Gallery2 from './assets/Image/gallery-2.jpg'
import Gallery3 from './assets/Image/gallery-3.jpg'
import Gallery4 from './assets/Image/gallery-4.jpg'
import Gallery5 from './assets/Image/gallery-5.jpg'
import Gallery6 from './assets/Image/gallery-6.jpg'
import Gallery7 from './assets/Image/gallery-7.jpg'
import Gallery8 from './assets/Image/gallery-8.jpg'
import Gallery9 from './assets/Image/gallery-9.jpg'
import Gallery10 from './assets/Image/gallery-10.jpg'
import Gallery11 from './assets/Image/gallery-11.jpg'
import Gallery12 from './assets/Image/gallery-12.jpg'
import logo10 from './assets/Logo/infinity.png'
import logo11 from './assets/Logo/apple.png'
import logo12 from './assets/Logo/leaf.png'
import logo13 from './assets/Logo/pause.png'
import Image3 from './assets/Image/Enjoying meal.webp'
import logo14 from './assets/Logo/insta.png'
import logo15 from './assets/Logo/facebook.png'
import logo16 from './assets/Logo/twitter.png'



import './App.css'

function App() {
  return (
    <div id="All-pages">
      {/* page 1 section */}
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
      


      {/* Page 2 Section */}
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

     {/* Page 3 Section */}
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

      {/* page 4 section*/}
      <section id="page4">
      <div class="page4-container">
         <div class="page4-left-section">
        <div class="page4-p">
          <p class="page4-testimonials-label">TESTIMONIALS</p>
          <h1 class="page4-main-heading">Once you try it, you can't go back</h1>
        </div>
  
        <div class="page4-testimonals-grid">
          <div class="page4-testimonial">
              <img src={profile1} alt="Dave Bryson" class="page4-avatar" />
              <p class="page4-quote">
                Inexpensive, healthy and great-tasting meals, without even having to order manually!
              </p>
              <p class="page4-author">— Dave Bryson</p>
            </div>
      
            <div class="page4-testimonial">
              <img src={profile2} alt="Ben Hadley" class="page4-avatar" />
              <p class="page4-quote">
                The AI algorithm is crazy good, it chooses the right meals for me every time!
              </p>
              <p class="page4-author">— Ben Hadley</p>
            </div>
      
            <div class="page4-testimonial">
              <img src={profile3} alt="Steve Miller" class="page4-avatar" />
              <p class="page4-quote">
                  "The food was absolutely delicious and full of flavor!"
                </p>
                <p class="page4-author">— Steve Miller</p>
            </div>
      
            <div class="page4-testimonial">
              <img src={profile4} alt="Hannah Smith" class="page4-avatar" />
              <p class="page4-quote">
                  This place exceeded my expectations. Fresh ingredients, quick service!
                </p>
                <p class="page4-author">— Hannah Smith</p>
            </div>
            <div class="page4-testimonial">
              <img src={profile5} alt="Unknown" class="page4-avatar" />
              <p class="page4-quote">
                  I loved everything about this restaurant, from it's taste to its warm welcome.
              </p>
              <p class="page4-author">— Unknown</p>
            </div>
            <div class="page4-testimonial">
              <img src={profile6} alt="Rahul Mehta" class="page4-avatar" />
              <p class="page4-quote">
                  "Friendly staff, relaxing atmosphere, and mouthwatering food!" 
              </p>
              <p class="page4-author">— Rahul Mehta</p>
            </div>
        </div>
      </div>
  
      <div class="page4-right-section">
        <div class="page4-grid">
          <img src={Gallery1} alt="1" />
          <img src={Gallery2} alt="2" />
          <img src={Gallery3} alt="3" />
          <img src={Gallery4} alt="4" />
          <img src={Gallery5} alt="5" />
          <img src={Gallery6} alt="6" />
          <img src={Gallery7} alt="7" />
          <img src={Gallery8} alt="8" />
          <img src={Gallery9} alt="9" />
          <img src={Gallery10} alt="10" />
          <img src={Gallery11} alt="11" />
          <img src={Gallery12} alt="12" />
        </div>
      </div>
      </div>
    </section>

    {/* page 5 section */}
    <section id="page5">
     <div class="content5">
    <div class="page5-container">
      <section class="page5-pricing-section">
        <p class="page5-pricing-label">PRICING</p>
        <h1 class="page5-heading">Eating well without breaking the bank</h1>

        <div class="page5-pricing-cards">
          <div class="page5-card">
            <h2 class="page5-plan-title">STARTER</h2>
            <div class="page5-price-block">
              <span class="page5-dollar">$</span>
              <span class="page5-price">399</span>
            </div>
            <p class="page5-sub-text">per month. That's just $13 per meal!</p>
            <ul class="page5-features">
              <li class="page5-feature-item">
                <span class="page5-icon">
                  <svg class="page3-icon-svg" fill="none" viewBox="0 0 24 24" stroke="#e67e22" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                1 meal per day
              </li>
              <li class="page5-feature-item">
                <span class="page5-icon">
                  <svg class="page5-icon-svg" fill="none" viewBox="0 0 24 24" stroke="#e67e22" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Order from 11am to 9pm
              </li>
              <li class="page5-feature-item">
                <span class="page5-icon">
                  <svg class="page5-icon-svg" fill="none" viewBox="0 0 24 24" stroke="#e67e22" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Delivery is free
              </li>
              <li class="page5-feature-item">
                <span class="page5-icon">
                  <svg class="page5-icon-svg" fill="none" viewBox="0 0 24 24" stroke="#e67e22" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
              </li>
              
            </ul>
            <button class="page5-btn">Start eating well</button>
          </div>
          <div class="page5-card page5-highlight">
            <div class="page5-best-value">BEST VALUE</div>
            <h2 class="page5-plan-title">COMPLETE</h2>
            <div class="page5-price-block">
              <span class="page5-dollar">$</span>
              <span class="page5-price">649</span>
            </div>
            <p class="page5-sub-text">per month. That's just $11 per meal!</p>
            <ul class="page5-features">
              <li class="page5-feature-item">
                <span class="page5-icon">
                  <svg class="page3-icon-svg" fill="none" viewBox="0 0 24 24" stroke="#e67e22" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <strong>2 meals</strong> per day
              </li>
              <li class="page5-feature-item">
                <span class="page5-icon">
                  <svg class="page3-icon-svg" fill="none" viewBox="0 0 24 24" stroke="#e67e22" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Order<strong> 24/7</strong>
              </li>
              <li class="page5-feature-item">
                <span class="page5-icon">
                  <svg class="page3-icon-svg" fill="none" viewBox="0 0 24 24" stroke="#e67e22" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Delivery is free
              </li>
              <li class="page5-feature-item">
                <span class="page5-icon">
                  <svg class="page3-icon-svg" fill="none" viewBox="0 0 24 24" stroke="#e67e22" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Get access to latest recipes
              </li>
            </ul>
            <button class="page5-btn">Start eating well</button>
          </div>
        </div>

        <p class="page5-footer-note">
          Prices include all applicable taxes. You can cancel at any time. Both plans include the following:
        </p>
      </section>
    </div>
  </div>
</section>

{/* page 6 section*/}
<section id="page6">
  <div class="page6-features">
    <div class="page6-feature">
      <div class="page6-icon"><img src={logo10}/></div>
      <h3>Never cook again!</h3>
      <p>Our subscriptions cover 365 days per year, even including major holidays.</p>
    </div>
    <div class="page6-feature">
      <div class="page6-icon"><img src={logo11}/></div>
      <h3>Local and organic</h3>
      <p>Our cooks only use local, fresh, and organic products to prepare your meals.</p>
    </div>
    <div class="page6-feature">
      <div class="page6-icon"><img src={logo12}/></div>
      <h3>No waste</h3>
      <p>All our partners only use reusable containers to package all your meals.</p>
    </div>
    <div class="page6-feature">
      <div class="page6-icon"><img src={logo13}/></div>
      <h3>Pause anytime</h3>
      <p>Going on vacation? Just pause your subscription, and we refund unused days.</p>
    </div>
  </div>

  <div class="page6-signup-section">
    <div class="page6-signup-box">
      <div class="page6-form-content">
        <h2>Get your first meal for free!</h2>
        <p>Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!</p>
        <form>
          <div class="page6-form-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Smith" />
          </div>
          <div class="page6-form-group">
            <label>Email address</label>
            <input type="email" placeholder="me@example.com" />
          </div>
          <div class="page6-form-group page6-full-width">
            <label>Where did you hear from us?</label>
            <select>
              <option>Please choose one option:</option>
              <option>Friends and family</option>
              <option>YouTube video</option>
              <option>Podcast</option>
              <option>Facebook ad</option>
              <option>Others</option>
            </select>
          </div>
          <div class="page6-form-group page6-full-width">
            <label>&nbsp;</label>
            <button type="submit" class="page6-submit-button">Sign up now</button>
          </div>
        </form>
      </div>
      <div class="page6-form-image">
        <img src={Image3} alt="Happy woman eating" />
      </div>
    </div>
  </div>
</section>


      {/* Page 7 Section */}
      <section id="page7">
        <div>
          <img src={logo} alt="Omnifood Logo" id="page7Logo" />

          <div id="page7SocialIcons">
            <img src={logo14} alt="Instagram" id="page7Instagram" />
            <img src={logo15} alt="Facebook" id="page7Facebook" />
            <img src={logo16} alt="Twitter" id="page7Twitter" />
          </div>

          <p id="page7Copyright">
            Copyright © 2025 by Omnifood,<br />
            Inc. All rights reserved.
          </p>
        </div>

        <div>
          <h4 id="page7ContactHeading">Contact us</h4>
          <p id="page7Address">623 Harrison St., 2nd Floor,<br />San Francisco, CA 94107</p>
          <p id="page7ContactInfo">415-201-6370<br />hello@omnifood.com</p>
        </div>

        <div>
          <h4 id="page7AccountHeading">Account</h4>
          <p>Create account</p>
          <p>Sign in</p>
          <p>iOS app</p>
          <p>Android app</p>
        </div>

        <div>
          <h4 id="page7CompanyHeading">Company</h4>
          <p>About Omnifood</p>
          <p>For Business</p>
          <p>Cooking partners</p>
          <p>Careers</p>
        </div>

        <div>
          <h4 id="page7ResourcesHeading">Resources</h4>
          <p>Recipe directory</p>
          <p>Help center</p>
          <p>Privacy & terms</p>
        </div>
      </section>
  </div>



  );
}

export default App;

