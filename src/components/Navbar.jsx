import React from 'react'
import useWindowsize from '../Hook/HandW.hook'
import "./Navbar.css"
import DrawerExample from './dwrawer'

const Navbar = () => {
  const [height,width] =useWindowsize();
  return (
    <div className='nav-box'>
      <div className='logo' ><a href="#home">Aniket Kolhe</a> </div>
      {width>900 ?
      <div className="option">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#Skills">Skills</a>
        <a href="#Project">Project</a>
        <a href="#Contact">Contact</a> 
        <a  href="https://drive.google.com/file/d/15JDk5kGkMSXN5XLz3RJ8k_Yc1zMoCl_j/view?usp=share_link"
          target="_blank" rel="noreferrer"> Resume</a>
      </div> :
      <DrawerExample/>
}
    </div>
  )
}

export default Navbar
