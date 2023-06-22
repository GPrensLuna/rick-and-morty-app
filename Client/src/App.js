/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./about/About.jsx";
import { Detail } from "./components/Detail/Detail.jsx";
import Error404 from "./components/Error404/Error404.jsx";
import Form from "./components/form/Form.jsx";
import Favorites from "./components/favorites/Favorites.jsx";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]); // Estado para almacenar los personajes y el estado de acceso

  const EMAIL = "GPrens@henrry.com"; // Correo electrónico esperado para iniciar sesión
  const PASSWORD = "pass1234"; // Contraseña esperada para iniciar sesión

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true); // Establecer el estado de acceso a true si las credenciales son correctas
      navigate("/home"); // Redirigir al usuario a la página de inicio
    } else {
      alert("Usuario o clave invalida"); // Alerta si las credenciales son incorrectas
    }
  }

  useEffect(() => {
    !access && navigate("/"); // Redirigir al usuario a la página de inicio de sesión si no ha iniciado sesión
  }, [access]);

  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (!characters.find((char) => char.id === data.id)) {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]); // Agregar el personaje a la lista de personajes si no existe previamente
          }
        } else {
          window.alert(`Ya existe ese personaje con ese ID: ${id}`); // Alerta si el personaje ya existe en la lista
        }
      })
      .catch((err) => alert(err.response.data.error)); // Alerta si ocurre un error en la solicitud HTTP
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id))); // Eliminar un personaje de la lista por su ID
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      {pathname !== "/" && <Nav onSearch={onSearch} />}{" "}
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
        <Route path="/favorites" element={<Favorites />}></Route>{" "}
        {/* Ruta para la página de favoritos */}
        <Route path="*" element={<Error404 />}></Route>{" "}
        {/* Ruta para cualquier otra ruta no definida */}
      </Routes>
    </div>
  );
}

export default App;
