import React from 'react'

export default function Footer() {
  return <>
  <footer className='text-white py-5 mt-5'>
    <div className='container'>
      <div className='row'>
      <div className='col-md-4 text-center'>
      <h3>LOCATION</h3>
      <p>2215 John Daniel Drive
        <br /> Clark, MO 65243</p>
      </div>

      <div className=' icon col-md-4 text-center '>
      <h3>AROUND THE WEB</h3>
<i className="fa-brands fa-facebook mx-1 d-inline-flex 
   justify-content-center align-items-center 
   border border-2 rounded-circle"
   style={{ width: "32px", height: "32px" }}>
</i>
<i className="fa-brands fa-twitter mx-1 d-inline-flex 
   justify-content-center align-items-center 
   border border-2 rounded-circle"
   style={{ width: "32px", height: "32px" }}>
</i>
<i className="fa-brands fa-linkedin-in mx-1 d-inline-flex 
   justify-content-center align-items-center 
   border border-2 rounded-circle"
   style={{ width: "32px", height: "32px" }}>
</i>
<i className="fa-solid fa-globe mx-1 d-inline-flex 
   justify-content-center align-items-center 
   border border-2 rounded-circle"
   style={{ width: "32px", height: "32px" }}>
</i>
      </div>

      <div className='col-md-4 text-center'>
      <h3>ABOUT FREELANCER</h3>
      <p>Freelance is a free to use, MIT licensed 
      <br /> Bootstrap theme created by Route</p>
      </div>
      </div>
    </div>
  </footer>
   <div className='bg-dark vh-50  d-flex justify-content-center align-items-center'>
      <p className='text-center py-3 text-white'>Copyright © Your Website 2024</p>
   </div>
  </>
}
