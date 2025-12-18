import React from 'react'

export default function Home() {
  return <>
  <div className='d-flex flex-column justify-content-center align-content-center mt-5 text-center'>
  <img src=".\src\assets\avataaars.svg" alt="Home Photo" />
  <h2 className='text-white fw-bold'> START FRAMWORK</h2>
      <div className="star-line  d-flex align-items-center justify-content-center mt-3">
          <span className="line"></span>
          <i className="fa-solid fa-star text-white"></i>
          <span className="line"></span>
        </div>
        <p className="text-white mt-3">
          Graphic Artist - Web Designer - Illustrator
        </p>
  </div>
  
  </>
}
