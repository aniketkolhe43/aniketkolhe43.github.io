/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import SingleProject from "./SingleProject";
import "./Project.css";

function Projects() {
  const [projects] = useState([
    {
      title: "Github Onbording Presentaion",
      img: "/projects/12.png",
      gLink: "https://github.com/aniketkolhe43/Github-Onbording",
      dLink: "https://dainty-pasca-9aaf67.netlify.app/",
      des: "GitHub, Inc. is an Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project",
      tstack: ["HTML", "CSS", "JAVASCRIPT"]
    },
    {
      title: "Asos Fashion Website clone",
      img: "/projects/11.png",
      gLink: "https://github.com/Mehul-Kanjariya/windy-picture-8509/tree/main",
      dLink: "https://meek-alfajores-0c8db8.netlify.app/",
      des: "An E-commerce Website Especially For New Fashion. for both men And Women,Discover the latest fashion trends with ASOS. Shop the new collection of clothing, footwear, accessories, beauty products and more",
      tstack: ["HTML", "CSS", "JAVASCRIPT"]

    },
    {
      title: "Beauty bebo Clone ",
      img: "/projects/13.png",
      gLink: "https://github.com/Utkarsh420/humorous-machine-6627",
      dLink: "https://serene-arithmetic-95f327.netlify.app/",
      des: "BeautyBebo is India’s fastest growing online retail store for the day to day and special occasion need of the Mackup, Skin care, Hair care, Personal care, Mom and Baby care, Fragrance and Ayurveda products. We at Beauty Bebo are committed to provide genuine products on fair price to our customers",
      tstack: ["HTML", "CSS", "JAVASCRIPT",]


    },
    {
      title: "Urban Company-clone",
      img: "/projects/14.png",
      gLink: "https://github.com/aniketkolhe43/tart-seat-6454",
      dLink:
        "https://dazzling-kashata-3a6b17.netlify.app/",
      des: "Urban Company provides a platform that allows skilled and experienced professionals to connect with users looking for specific services. Once on the platform, our match-making algorithm identifies professionals who are closest to the users' requirements and available at the requested time and date. ",
      tstack: ["HTML", "CSS", "JAVASCRIPT"]

    },
  ]);
  return (
    <div id="Project">
      <div className="pro">
        <h2 style={{ fontWeight: "700", color: "white", fontSize: "24px" }}>Projects</h2></div>
      <div className="project-box">
        {projects.map((el) => {
          return <SingleProject {...el} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
