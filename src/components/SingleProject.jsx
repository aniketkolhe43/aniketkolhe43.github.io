import React from 'react'
import "./SinglePage.css"

const SingleProject = ({title,img,gLink,dLink,des,tstack,fet}) => {
   
  return (
    <div className='SingleProject-box'>
      <h3>{title}</h3>
      <img src={img} alt="project-img" />
      <p>{des}</p>
      <p id='fet'>Features :-{fet} </p>
      <div className='button-box'>
        <div>
        <button><a href={gLink} rel="noreferrer"  target="_blank">Code</a></button>
        <button><a href={dLink} rel="noreferrer"  target="_blank">Live</a></button>
        </div >
        <div className='main-tsbox'>
        <p>Tech Stack</p>
      <div className='tstack'>
        {tstack.map((el)=>{
          return(<div> <h3>{el}</h3></div>)
        })}
      </div>
      </div>
      </div>
    </div>
  )
}

export default SingleProject
