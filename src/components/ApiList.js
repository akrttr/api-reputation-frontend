import React, { useEffect, useState } from "react";
import axios from "axios";
import AddApiForm from "./AddApiForm";

const ApiList = () => {
  const [apis, setApis] = useState([]);

  useEffect(() => {
    fetchApis();
  }, []);

  const fetchApis = () => {
    axios.get("https://localhost:44394/api/ApiInfo")
      .then(response => {
        setApis(response.data);
      })
      .catch(error => {
        console.error("Error while fetching apis:", error);
      });
  };

  const handleApiAdded = (newApi) => {
    setApis([...apis, newApi]); // Yeni API'yi listeye ekle
  };

  return (
    <div>
      <h2>API Listesi</h2>
      <AddApiForm onApiAdded={handleApiAdded} />
      <ul>
        {apis.map(api => (
          <li key={api.id}>{api.name} - {api.baseUrl}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiList;
