import { useState } from "react";
import "./searchbarStyle.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  function handleChange(event) {
    setId(event.target.value);
  }

  return (
    <div className="contenSearch">
      <button className="buttonSearch" onClick={() => onSearch(id)}>
      Agregar
      <input className="inputSearch" type="search" onChange={handleChange} />
      </button>
    </div>
  );
}
