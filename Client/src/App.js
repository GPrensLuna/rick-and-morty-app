 /* eslint-disable react-hooks/exhaustive-deps */
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
  const [characters, setCharacters] = useState([]); // Estado para almacenar los personajes y el estado de acceso

  useEffect(() => {
    !access && navigate("/"); // Redirigir al usuario a la página de inicio de sesión si no ha iniciado sesión
  }, [access]);

  const URL = "http://localhost:3001/rickandmorty/";

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
        window.alert("Este personaje ya está en la lista.");
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
      {/* Mostrar el componente de navegación en todas las rutas excepto en la página de inicio de sesión */}
      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>{" "}
        {/* Ruta para la página de inicio de sesión */}
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/About" element={<About />}></Route>{" "}
        {/* Ruta para la página "Acerca de" */}
        <Route path="/detail/:id" element={<Detail />}></Route>{" "}
        {/* Ruta para la página de detalles de un personaje */}
        <Route path="/favorites" element={<Favorites onClose={onClose}/>}></Route>{" "}
        {/* Ruta para la página de favoritos */}
        <Route path="*" element={<Error404 />}></Route>{" "}
        {/* Ruta para cualquier otra ruta no definida */}
      </Routes>
    </div>
  );
}

export default App;
