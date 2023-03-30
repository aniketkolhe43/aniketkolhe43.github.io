import React from 'react'
import useWindowsize from '../Hook/HandW.hook'
import "./Navbar.css"
import DrawerExample from './dwrawer'
import { Text } from '@chakra-ui/react'

const Navbar = () => {
  const [height, width] = useWindowsize();
  return (
    <div className='nav-box'>
      <div className='logo' ><Text
        bgGradient='linear(to-r, yellow.400, #FF0080)'
        bgClip='text'
        fontSize={"30px"}
        fontWeight='extrabold'
      >
    <a href="#home">Aniket Kolhe</a>
      </Text> </div>
      {width > 900 ?
        <div className="option">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#Skills">Skills</a>
          <a href="#Project">Projects</a>
          <a href="#Contact">Contact</a>
          <a className='resbtn'
            href="Aniket-Kolhe-Resume.pdf" download="Aniket-Kolhe-Resume"
            target=""  onClick={()=>window.open("https://drive.google.com/file/d/1v2gGvgN1exAWrI6K4uxS2Y9eRNiyB-1i/view?usp=share_link","_blank")}>
            Resume  
          </a>
        </div> :
        <DrawerExample />
      }
    </div>
  )
}

export default Navbar
