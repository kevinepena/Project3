// what components are we importing?

import React from "react";
import "./Header.css";
import { Slide } from 'react-slideshow-image';

const images = [];

for(let i = 1; i <= 20; i++) {
images.push(`assets/images/nica${i}.jpg`)
}






const Header = () => (

    <header className="header">
            <div className="slidecontainer">
        <Slide
          images={images}
          duration={5000}
          transitionDuration={1000}
        />
        </div>
        <div className="heading">
        <div className="mainheading">Nica Libre</div>
     
        <div className="header3"> <em>Happening Now</em></div>
        </div>

    </header>

);

export default Header;