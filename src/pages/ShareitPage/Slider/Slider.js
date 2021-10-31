import React from "react";
import "./Slider.css";
const Slider = () => {
  return (
    // https://i.ibb.co/L9TNGcw/ehsan-rahman-oj-A0-DBpe7oc-unsplash.jpg
    // https://images.unsplash.com/photo-1602528495711-f52bf3988a00?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1203&q=80
    // https://images.unsplash.com/photo-1578128178799-ffbb862243c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner slider-h ">
        <div class="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1578128178799-ffbb862243c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            class="d-block  slider-img-design"
            alt="..."
          />
          <div className="text-white position-relative d-flex  justify-content-center top-100">
            <div className="position-absolute align-items-center ">
              <h1 className="slider-title ">Travel & Explore</h1>
              <p className=" fs-5">
                Curabitur facilisis consectetur porttitor. Aenean eleifend quis
                nunc eget aliquet.
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://i.ibb.co/L9TNGcw/ehsan-rahman-oj-A0-DBpe7oc-unsplash.jpg"
            class="d-block slider-img-design"
            alt="..."
          />
          <div className="text-white position-relative d-flex  justify-content-center top-100">
            <div className="position-absolute align-items-center ">
              <h1 className="slider-title ">Relax & Enjoy the World</h1>
              <p className=" fs-5">
                Fusce sit amet auctor nisl. Cras hendrerit ut ligula eget
                luctus. Curabitur eu lobortis erat.
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1602528495711-f52bf3988a00?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1203&q=80"
            class="d-block  slider-img-design"
            alt="..."
          />
          <div className="text-white position-relative d-flex  justify-content-center top-100">
            <div className="position-absolute align-items-center ">
              <h1 className="slider-title ">Look & Feel the World .</h1>
              <p className=" fs-5">
                Phasellus sagittis sem eget sapien consequat, vitae porttitor
                felis feugiat. Nullam suscipit condimentum hendrerit
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
