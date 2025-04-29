import React from "react";
import './App.css';

import profile1 from './assets/Profile Pictures/profile1.jpg';
import profile2 from './assets/Profile Pictures/profile2.jpg';
import profile3 from './assets/Profile Pictures/profile3.jpg';
import profile4 from './assets/Profile Pictures/profile4.jpg';
import profile5 from './assets/Profile Pictures/profile5.jpg';
import profile6 from './assets/Profile Pictures/profile6.jpg';
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

function Testimonals() {
    return(
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
    )
}

export default Testimonals;