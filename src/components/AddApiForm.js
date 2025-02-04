import React, { useState } from "react";
import axios from "axios";

const AddApiForm = ({ onApiAdded }) => {
  const [name, setName] = useState("");
  const [baseUrl, setBaseUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Sayfa yenilenmesini önle

    try {
      const response = await axios.post("http://localhost:5000/api/apiinfo", {
        name,
        baseUrl
      });

      onApiAdded(response.data); // Yeni API'yi listeye ekle
      setName(""); // Formu temizle
      setBaseUrl("");
    } catch (error) {
      console.error("API eklenirken hata oluştu:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Yeni API Ekle</h2>
      <div>
        <label>API Adı:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Base URL:</label>
        <input type="text" value={baseUrl} onChange={(e) => setBaseUrl(e.target.value)} required />
      </div>
      <button type="submit">Ekle</button>
    </form>
  );
};

export default AddApiForm;
