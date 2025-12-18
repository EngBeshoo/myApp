import React from 'react'

export default function About() {
  return (
    <>
      <div className="about text-white text-center text-md-start vh-100 d-flex flex-column justify-content-center align-items-center">
        <h2 className="fw-bold mt-5">ABOUT COMPONENT</h2>

        <div className="star-line star-line-about my-3 text-white">
          <span className="line"></span>
          <i className="fa-solid fa-star"></i>
          <span className="line"></span>
        </div>

        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-5 text-start">
              <p>
                Freelancer is a free bootstrap theme created by Route.
                The download includes the complete source files including
                HTML, CSS, and JavaScript as well as optional SASS
                stylesheets for easy customization.
              </p>
            </div>

            <div className="col-md-5 text-start">
              <p>
                Freelancer is a free bootstrap theme created by Route.
                The download includes the complete source files including
                HTML, CSS, and JavaScript as well as optional SASS
                stylesheets for easy customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
