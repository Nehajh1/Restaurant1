import React from "react";
import './App.css'

import logo10 from './assets/Logo/infinity.png'
import logo11 from './assets/Logo/apple.png'
import logo12 from './assets/Logo/leaf.png'
import logo13 from './assets/Logo/pause.png'
import Image3 from './assets/Image/Enjoying meal.webp'

function Form() {
    return(
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


    )
}

export default Form;