import React from "react";
import ApiList from "./components/ApiList"; // Yeni bileşeni içe aktarıyoruz

function App() {
  return (
    <div>
      <h1>API Reputation Systeem</h1>
      <ApiList /> {/* API listesini buraya ekledik */}
    </div>
  );
}

export default App;
