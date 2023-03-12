import React from "react";
import "./stat.css"
import "../App.css";
const Stats = () => {
  return (
    // streak
    <div style={{backgroundColor:"rgb(69, 67, 67)"}}>
    <div className="stat">
      <div  style={{margin:"auto"}}>
        <a href="https://github.com/282Manoj">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=282Manoj"
            alt="hell"
          />
        </a>
      </div>
 
      <div  className="stat-box"
        
      >
        {/* <a href="https://github.com/282Manoj">
          <img 
            align="right"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=282Manoj"
            alt="hello" //launguages
          />
        </a> */}
        <a href="https://github.com/282Manoj">
          <img 
            src="https://github-readme-stats.vercel.app/api?username=282Manoj&count_private=true&show_icons=true"
            alt="hle" 
            style={{marginTop:"10px"}}
          />
        </a> 
      </div>
    </div>
    </div>
  );
};

export default Stats;
