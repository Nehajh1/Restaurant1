import React from "react";
import './App.css';

import logo from "./assets/Logo/logo.png"
import logo14 from './assets/Logo/insta.png'
import logo15 from './assets/Logo/facebook.png'
import logo16 from './assets/Logo/twitter.png'

function Footer() {
    return (
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
    )
}

export default Footer;