/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Banner.css";
// import cv from "../Assets/Manoj_Kumar_Resume.pdf";
import { DownloadIcon } from '@chakra-ui/icons'


function Banner() {
  return (
    <div id="ban" >


      <div className="banner-wrapper" id="home">
        <img src="/Aniket.png" alt="" />
        <div className="banner-content">
          <h6>Hello, I'm Aniket Kolhe</h6>
          <h3> Technical Support Enginner</h3>
          <h3>
            About me
          </h3>
          <p>
            Aspiring Customer service-focused Technical support specialist. As a Technical Support Engineer,
             committed to providing the highest customer service and support. Technical expertise spans various areas, 
             including hardware, software, network administration, and security. proficient in diagnosing and resolving issues with servers,
            workstations, and other computer peripherals.
          </p>
          <a
            className="btn"
            href="Aniket_Kolhe_Resume.pdf" download="Aniket_Kolhe_Resume"
            target="">
            Resume  <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
