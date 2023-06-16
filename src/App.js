/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { Route, Routes, useLocation, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./components/cards/Cards";
import Nav from "./components/nav/Nav";
import About from "./about/About.jsx";
import { Detail } from "./components/Detail/Detail";
import Error404 from "./components/Error404/Error404";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";

function App() {

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([false]);
  const [access , setAccess] = useState([]);

  const EMAIL = 'GPrens@henrry.com'
  const PASSWORD = "pass1234"

  function login (email, password) {
    if (password === PASSWORD && email === EMAIL) {
      setAccess(true)
      navigate("/home")
    } else {
      alert("Usuario o clave invalida");
    }
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (!characters.find(char => char.id === data.id)) {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert(`Ya existe ese personaje con ese ID`);
        }
      }).catch((err) => alert(err.response.data.error));
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>

        <Route path="/home" element={ <Cards characters={characters} onClose={onClose} />}></Route>

        <Route path="/About" element={<About />}></Route>

        <Route path="/detail/:id" element={<Detail />}></Route>

        <Route path="/favorites" element={<Favorites />}></Route>

        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
