import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="bg-light py-5 mt-5">
      <div className="container">
        <div className="row row-cols-md-4 row-cols-1">
          <div className="cols">
            <h4 className="text-uppercase fw-bold">Contact info</h4>
            <div className="d-flex justify-content-between">
              <p className="fw-bolder text-success">FaceBook </p>
              <a
                href="https://www.facebook.com/dream"
                className="text-decoration-none"
              >
                www.fb.com/dreamtorus
              </a>
            </div>
            <div className="d-flex justify-content-between">
              <p className="fw-bolder text-success">Phone: </p>
              <p>+880-1345-3456-244</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="fw-bolder text-success">Gmail: </p>
              <p>dream.trous@gmail.com</p>
            </div>
          </div>
          <div className="cols">
            <h4 className="text-uppercase fw-bold">About us</h4>
            <div className="text-capitalize">
              <p>Our Story</p>
            </div>
            <div className="text-capitalize">
              <p>travel $ Tips</p>
            </div>
            <div className="text-capitalize">
              <p>Working With Us</p>
            </div>
          </div>
          <div className="cols">
            <h4 className="text-uppercase fw-bold">Support</h4>
            <div className="text-capitalize">
              <p>Customer Support</p>
            </div>
            <div className="text-capitalize">
              <p>Privacy & Policy</p>
            </div>
            <div className="text-capitalize">
              <p>Contact Channels</p>
            </div>
          </div>
          <div className="cols">
            <h4 className="text-uppercase fw-bold">pay save</h4>
            <div>
              Plug into Paysafe | We provide simple and secure payment solutions
              to businesses of all sizes around the world. Our industry-leading
              capabilities enable .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;