import React from "react";
import { useState } from "react";
import "./Skill.css"
import { SingleSkills } from "./skillsData";

function Skill() {
  const [techinical] = useState([
    {
      img: "/skills/html.png",
      name:"HTML"
    },
    {
      img: "/skills/css.png",
      name:"CSS"
    },
    {
      img: "/skills/javascript.png",
      name:"JavaScript"
    },
    {
      img: "/skills/linux.png",
      name:"Linux"
    },
     {
      img: "/skills/os-logo.png",
      name:"OS"
    },

    {
      img: "/skills/sql.png",
      name:"SQL"
    },
  ]);

  const [customer]=useState([
    {
      img: "/skills/tech_suport.jpeg",
      name:"Techinical Support"
    },
    {
      img: "/skills/active_listingng.png",
      name:"Effective Listning"
    },
    {
      img: "/skills/take_res.jpeg",
      name:"Take Responsibility"
    },
  ])
  const [soft]=useState([
    {
      img: "/skills/time.jpeg",
      name:"Time Management"
    },
    {
      img: "/skills/communication.jpeg",
      name:"Communication"
    },
    {
      img: "/skills/problum.jpeg",
      name:"Problem Solving"
    },
  ])
  return (

    <div className="skill-box" id="Skills">
      <h1>Skills</h1>
      <SingleSkills data={techinical} type={"Techinical Skills"}/>
      <SingleSkills data={customer} type={"Customer Service Skills"}/>
      <SingleSkills data={soft} type={"Soft Skills"}/>
    </div>

  );
}


export default Skill;
