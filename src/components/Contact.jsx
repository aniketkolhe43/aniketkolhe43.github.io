import React from 'react'
import "./Contact.css";

export default function Contact() {
  return (
    <>

      <div className='contact' id="Contact">
      <h2>Contact Me </h2>

        <div className='contact-item'>
          <div>
            <i style={{ backgroundColor: "blue" }} class="fa-brands fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/aniket-kolhe-ba0730205/" target="_blank" rel="noopener noreferrer">Aniket Kolhe</a>
          </div>
          <div>
            <i class="fa-brands fa-github"></i>
            <a href="https://github.com/aniketkolhe43" target="_blank" rel="noopener noreferrer">aniketkolhe43</a>
          </div>
          <div>
            <i style={{ backgroundColor: "red" }} class="fa-solid fa-envelope"></i>
            <p>aniketkolhe0907@gmail.com</p>
          </div>
          <div>
            <i class="fa-solid fa-phone"></i>
            <p>+91 7219112090</p>
          </div>

        </div>
      </div></>

  )
}
