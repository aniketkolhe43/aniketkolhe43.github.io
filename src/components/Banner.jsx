/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Banner.css";
// import cv from "../Assets/Manoj_Kumar_Resume.pdf";
import { DownloadIcon } from '@chakra-ui/icons'
import { Box } from "@chakra-ui/react";


function Banner() {
  return (
    <Box id="ban" bgGradient='linear(to-r, red.200, yellow.300, pink.300)' >


      <div className="banner-wrapper" id="home">
        <img src="/Aniket-rembg.png" alt="" />
        <div className="banner-content">
          <h6>Hello, I'm Aniket Kolhe</h6>
          <h3> Technical Support Enginner</h3>
          <a className="btn"
            href="Aniket-Kolhe-Resume.pdf" download="Aniket-Kolhe-Resume"
            target=""  onClick={()=>window.open("https://drive.google.com/file/d/1v2gGvgN1exAWrI6K4uxS2Y9eRNiyB-1i/view?usp=share_link","_blank")}>
            Resume  <DownloadIcon />
          </a>
        </div>
      </div>
    </Box>
  );
}

export default Banner;
