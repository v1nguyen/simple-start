import React from "react";
import './Menu.css';

function Menu() {
    return (
        <nav>
    <ul>
      <li>General</li>
      <li><a href="https://bitbucket.org/openspeechplatform//">OSP Bitbucket</a></li>
      <li><a href="https://ucsdcampus.ecotimebyhbs.com/hbssaml2sp/">Ecotime</a></li>
    </ul>

    <ul>
      <li>Education</li>
      <li><a href="https://canvas.ucsd.edu/">Canvas</a></li>
      <li><a href="https://www.gradescope.com/">Gradescope</a></li>
    </ul>

    <ul>
      <li>Class Webpages</li>
      <li><a href="https://cseweb.ucsd.edu/classes/fa21/cse120-a/">Operating Systems</a></li>
      <li><a href="https://cseweb.ucsd.edu/classes/fa21/cse258-b/">Web Mining</a></li>
    </ul>

    <ul>
      <li>Piazza</li>
      <li><a href="https://piazza.com/class/kt9mtpbh4g01h9">CSE 120</a></li>
      <li><a href="https://piazza.com/class/ktq39lz6ixo6h">CSE 158</a></li>
      <li><a href="https://piazza.com/class/ktulurrctje3ga">MATH 18</a></li>
    </ul>
  </nav>
  
      );
}

export default Menu;