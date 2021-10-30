import { useEffect, useState } from "react";

const useDatabase = () => {
  const [servicesAll, setServicesAll] = useState([]);
  const [booktourslist, setBooktourslist] = useState([]);
  const [dataLoadTime, setDataLoadTime] = useState(true);

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
    fetch(
      `https://salty-cove-54306.herokuapp.com/showallservices/booktourslist`
    )
      .then((res) => res.json())
      .then((data) => {
        setBooktourslist(data);
      })
      .finally(() => {
        setDataLoadTime(false);
      });
  }, []);

  // admin and user service delete
  const deletebooktoursrlist = (id) => {
    console.log(id);
    fetch(
      `https://salty-cove-54306.herokuapp.com/showallservices/delettable/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const updateTable = booktourslist.filter(
          (booktours) => booktours._id !== id
        );
        setBooktourslist(updateTable);
      });
  };

  return {
    servicesAll,
    setServicesAll,
    dataLoadTime,
    booktourslist,
    setBooktourslist,
    deletebooktoursrlist,
  };
};

export default useDatabase;
