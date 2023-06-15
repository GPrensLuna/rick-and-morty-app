import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cards from "./components/cards/Cards";
import Nav from "./components/nav/Nav";
import About from "./about/About";
import { Detail } from "./components/Detail/Detail";
import Error404 from "./components/Error404/Error404";

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
      .catch((err) => alert(err.response.data.error));
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={
            <div className="card">
              <Cards characters={characters} onClose={onClose} />
            </div>
          }
        ></Route>

        <Route path="/About" element={<About />}></Route>

        <Route path="/detail/:id" element={<Detail />}></Route>

        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
