import React from "react";

const ServiceBgImg = () => {
  return (
    <div>
      <div className="card bg-dark text-white p-0 position-relative border-0">
        <img
          src="https://travo.iamabdus.com/v1.0/wp-content/uploads/2021/04/shlomo-shalev-GoPYSBvZ-QQ-unsplash-1.jpg"
          className="card-img w-100 "
          alt="..."
        />
        <div className="card-img-overlay">
          <div className="position-absolute  bottom-0 ">
            <h3>Bangladesh</h3>
            <h5>22 places</h5>
            {/* <button className="btn btn-sm btn-outline-success mb-2 mx-3 text-light">
            seer more
          </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBgImg;
