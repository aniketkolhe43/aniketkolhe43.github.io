import React from "react"
import GitHubCalendar from "react-github-calendar"
import "./calendar.css";
 
 const Clander = () => {
   return (
     <div className="cal">
       <GitHubCalendar  style={{width:"80",margin:"auto",backgroundColor:"gray",marginTop:"20px"}}
        username="282Manoj"
        blockSize={15}
        // blockMargin={5}
        color="#40C463"
        fontSize={16}
      >

      </GitHubCalendar>
     </div>
   )
 }
 
 export default Clander
 