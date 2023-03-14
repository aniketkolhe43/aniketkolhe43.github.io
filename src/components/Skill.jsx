import React from "react";
import { useState } from "react";
import "./Skill.css"

function Skill() {
  const [services] = useState([
    {
      img: "/skills/html.png",
    },
    {
      img: "/skills/css.png",
    },
    {
      img: "/skills/javascript.png",
    },
    {
      img: "/skills/linux.png",
    },
    {
      img: "/skills/os-logo.png",
    },

    {
      img: "/skills/sql.png",
    },
  ]);
  return (

    <div className="skill-box" id="Skills">
      <div className="title">
        <h3>SKILLS</h3>
      </div>
      <div className="services" id="services">
        {services.map((el, i) => (
          <div className="imgg" key={i}>
            <img src={el.img} alt="" />

          </div>
        ))}
      </div>
    </div>

  );
}


export default Skill;
