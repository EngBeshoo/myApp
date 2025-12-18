import React from 'react'
import { useState } from 'react';


export default function Gallary() {

 const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    { id: 1, img: "src/assets/port1.png", title: "Project 1" },
    { id: 2, img: "src/assets/port2.png", title: "Project 2" },
    { id: 3, img: "src/assets/port3.png", title: "Project 3" },
    { id: 7, img: "src/assets/port1.png", title: "Project 4" },
    { id: 8, img: "src/assets/port2.png", title: "Project 5" },
    { id: 9, img: "src/assets/port3.png", title: "Project 6" }
  ];

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };


  return <>
  <section className="portfolio py-5 bg-white" id="portfolio">
        <div className='container'>
          <div className='row py-3 text-center justify-content-center'>
            <h2 className='fw-bold text-center py-3 mb-2 text-uppercase'>Portfolio</h2>
            
            <div className="star-line mb-5">
              <span className="line bg-dark"></span>
              <i className="fa-solid fa-star text-dark"></i>
              <span className="line bg-dark"></span>
            </div>
            
            {portfolioItems.map((item) => (
              <div className='col-md-4 mb-4' key={item.id}>
                <div 
                  className='portfolio-item position-relative overflow-hidden'
                  onClick={() => openModal(item)}
                  style={{ cursor: 'pointer' }}
                >
                  <img 
                    src={item.img} 
                    className='img-fluid w-100' 
                    alt={`Portfolio item ${item.id}`} 
                  />
                  <div className='portfolio-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center'>
                    <i className="fa-solid fa-plus text-white fa-5x"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>  
      </section>

      {selectedImage && (
        <div 
          className="modal fade show d-block" 
          style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title">{selectedImage.title}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body p-0">
                <img 
                  src={selectedImage.img} 
                  className="img-fluid w-100" 
                  alt={selectedImage.title} 
                />
              </div>
              <div className="modal-footer border-0 justify-content-center">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
  
  </>
}
