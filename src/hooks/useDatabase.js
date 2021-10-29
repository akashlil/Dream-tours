import { useEffect, useState } from "react";

const useDatabase = () => {
  const [servicesAll, setServicesAll] = useState([]);
  const [dataLoadTime, setDataLoadTime] = useState(true);

  useEffect(() => {
    fetch(`https://salty-cove-54306.herokuapp.com/showallservices`)
      .then((res) => res.json())
      .then((data) => {
        setServicesAll(data);
        setDataLoadTime(false);
      });
  }, []);

  return {
    servicesAll,
    setServicesAll,
    dataLoadTime,
  };
};

export default useDatabase;
