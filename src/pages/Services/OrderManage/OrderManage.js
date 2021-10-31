import React from "react";
import useDatabase from "../../../hooks/useDatabase";

const OrderManage = () => {
  const { booktourslist, deletebooktoursrlist, udatebooktoursrlist } =
    useDatabase();
  let i = 1;

  // status update

  return (
    <div className=" table-responsive">
      <table className="table  table-borderless   caption-top">
        <caption className="fw-bolder fs-4">Manage All Orders</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email id</th>
            <th scope="col">Booktours List</th>
            <th scope="col">Booktours List</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {booktourslist?.map((booktours) => {
            return (
              <tr>
                <th scope="row">{i++}</th>
                <td>{booktours?.name}</td>
                <td>{booktours?.email}</td>
                <td>{booktours?.bookservicetitle}</td>
                <td>
                  {booktours?.status === "update" ? (
                    <span class="badge rounded-pill bg-success">
                      {booktours?.status}
                    </span>
                  ) : (
                    <span class="badge rounded-pill bg-primary">
                      {booktours?.status}
                      {"..."}
                    </span>
                  )}
                </td>

                <td>
                  <button
                    onClick={() => udatebooktoursrlist(booktours._id)}
                    className="btn btn-sm btn-success me-3"
                  >
                    <i className="fas fa-pen-alt" aria-hidden="true"></i>
                  </button>
                  <button
                    onClick={() =>
                      window.confirm(
                        "Are you sure ? this item has been detected "
                      ) && deletebooktoursrlist(booktours._id)
                    }
                    className="btn btn-sm btn-danger"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManage;
