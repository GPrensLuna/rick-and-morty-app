import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import { Detail } from "./components/Detail/Detail.jsx";
import Error404 from "./components/Error404/Error404.jsx";
import Form from "./components/form/Form.jsx";
import Favorites from "./components/favorites/Favorites.jsx";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    !access && navigate("/"); // Redirigir al usuario a la página de inicio de sesión si no ha iniciado sesión
  }, [access]);

  const URL = "https://rick-and-morty-app-113d.onrender.com";

  async function login(userData) {
    const { email, password } = userData;

    try {
      const { data } = await axios(
        `${URL}login?email=${email}&password=${password}`
      );

      const { access } = data;

      setAccess(access);

      access && navigate("/home");
    } catch (error) {
      window.alert(error.message);
    }
  }

  function logout() {
    setAccess(false);
    navigate("/");
  }

  async function onSearch(id) {
    try {
      const { data } = await axios(`${URL}/character/${id}`);
      if (data.name) {
        const isCharacterInList = characters.some(
          (character) => character.id === data.id
        );

        if (!isCharacterInList) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("hola");
        }
      }
    } catch (error) {
      window.alert(error.message);
    }
  }

  function onClose(id) {
    const newCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );

    setCharacters(newCharacters);
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      {pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}{" "}
      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>{" "}
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/About" element={<About />}></Route>{" "}
        <Route path="/detail/:id" element={<Detail />}></Route>{" "}
        <Route
          path="/favorites"
          element={<Favorites onClose={onClose} />}
        ></Route>{" "}
        <Route path="*" element={<Error404 />}></Route>{" "}
      </Routes>
    </div>
  );
}

export default App;
