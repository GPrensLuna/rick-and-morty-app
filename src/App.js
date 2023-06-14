import "./App.css";
import { useState } from "react";
import axios from "axios";
import Cards from "./components/cards/Cards";
import Nav from "./components/nav/Nav";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (!characters.find((char) => char.id === data.id)) {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          alert(`Ya existe ese personaje con ese id ${id}`);
        }
      })
      .catch(() => window.alert("¡No hay personajes con este ID!"));
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} />

      <div className="card">
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  );
}

export default App;
