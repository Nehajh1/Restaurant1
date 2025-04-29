import React from "react";
import './App.css';


function Pricing() {
    return (
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
    )
}

export default Pricing;