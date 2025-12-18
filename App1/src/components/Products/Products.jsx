import React from 'react'

export default function Products() {
  return <>
   <div className="contact vh-100 d-flex justify-content-center align-items-center">
        <div className="w-100">

          <h2 className="text-center fw-bold mb-3">
            CONTACT SECTION
          </h2>

          <div className="star-line mb-5">
            <span className="line"></span>
            <i className="fa-solid fa-star"></i>
            <span className="line"></span>
          </div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">

                <input className="form-control mb-4" placeholder="userName" />
                <input className="form-control mb-4" placeholder="userAge" />
                <input className="form-control mb-4" placeholder="userEmail" />
                <input className="form-control mb-4" placeholder="userPassword" />

                <button style={{ backgroundColor: '#1ABC9C' }} className="btn text-white">
                  send Message
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
  </>
}
