import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../context/useAuth";
import useDatabase from "../../hooks/useDatabase";
import "./MyOrder.css";

const MyOrder = () => {
  const { user } = useAuth();
  const { booktourslist, deletebooktoursrlist } = useDatabase();

  let userbooktourslist = booktourslist?.filter(
    (booktours) => booktours.email === user?.email
  );

  return (
    <div className="row row-cols-md-3 row-cols-1 myorder-section-gap">
      {userbooktourslist.map((items) => (
        <div className="col">
          <div className="shadow py-3 m-4 bg-body rounded" key={items._id}>
            <div className="d-flex justify-content-between align-items-center  px-4">
              <div>
                <Link
                  className="text-decoration-none text-success fw-bolder"
                  to={`/bookservice/${items.bookserviceid}/${items.bookservicetitle}`}
                >
                  <p className="m-0">{items.bookservicetitle}</p>
                </Link>
              </div>
              <div>
                <button
                  className="btn btn-light"
                  onClick={() => deletebooktoursrlist(items._id)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrder;
