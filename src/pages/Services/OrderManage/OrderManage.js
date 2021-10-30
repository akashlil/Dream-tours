import React from "react";
import useDatabase from "../../../hooks/useDatabase";

const OrderManage = () => {
  const { booktourslist, deletebooktoursrlist } = useDatabase();
  let i = 1;

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
                  <button
                    onClick={() => deletebooktoursrlist(booktours._id)}
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
