import React from 'react';

export const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" id="carousel">
          <div className='carousel-caption' style={{zIndex:'10'}}>
          <form className="d-flex m-8">
      <input className="form-control me-2 d-flex " style={{backgroundColor:'white'}} type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>  
          </div>
          <div className="carousel-item active">
            <img
              src="/m8.jpg"
              className="d-block w-70"
              style={{
                height: "550px",
                width: "100%",
                objectFit: "cover",
                filter:'brightness(50%)'
              }}
              alt="Mix"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/b8.jpg"
              className="d-block w-100"
              style={{
                height: "550px",
                width: "90%",
                objectFit: "cover",
                  filter:'brightness(50%)'
              }}
              alt="Pizza"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/f5.jpg"
              className="d-block w-100"
              style={{
                height: "550px",
                width: "100%",
                objectFit: "cover",
                  filter:'brightness(50%)'
              }}
              alt="Burgers"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
