import { useEffect, useState } from "react";

const useDatabase = () => {
  const [servicesAll, setServicesAll] = useState([]);
  const [booktourslist, setBooktourslist] = useState([]);
  const [dataLoadTime, setDataLoadTime] = useState(true);
  const [getDatacallagin, setgetDatacallagin] = useState(false);
  useEffect(() => {
    fetch(`https://salty-cove-54306.herokuapp.com/showallservices`)
      .then((res) => res.json())
      .then((data) => {
        setServicesAll(data);
      })
      .finally(() => {
        setDataLoadTime(false);
      });
  }, []);

  useEffect(() => {
    fetch(`https://salty-cove-54306.herokuapp.com/booktourslist`)
      .then((res) => res.json())
      .then((data) => {
        setBooktourslist(data);
      })
      .finally(() => {
        setDataLoadTime(false);
      });
  }, [getDatacallagin]);

  // admin and user service delete
  const deletebooktoursrlist = (id) => {
    fetch(`https://salty-cove-54306.herokuapp.com/delettable/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const updateTable = booktourslist.filter(
          (booktours) => booktours._id !== id
        );
        setBooktourslist(updateTable);
      })
      .finally(() => {
        setDataLoadTime(false);
      });
  };

  const udatebooktoursrlist = (id) => {
    setgetDatacallagin(false);
    const updateStatus = { status: "update" };
    fetch(`https://salty-cove-54306.herokuapp.com/statusupdate/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setgetDatacallagin(true);
        }
      });
  };

  return {
    servicesAll,
    setServicesAll,
    dataLoadTime,
    booktourslist,
    setBooktourslist,
    deletebooktoursrlist,
    udatebooktoursrlist,
  };
};

export default useDatabase;
