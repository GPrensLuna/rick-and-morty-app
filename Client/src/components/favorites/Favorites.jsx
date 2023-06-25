import React from "react";
import { connect } from "react-redux";
import {
  orderCards,
  filterFav,
  removeFav,
} from "../../redux/actions/actions.js";
import { useDispatch } from "react-redux";
import Card from "../card/Card.jsx";

function Favorites({ myFavorites }) {
  const dispatch = useDispatch();

  // Manejador de eventos para cambiar el orden de las tarjetas
  const handleOrder = function (evento) {
    dispatch(orderCards(evento.target.value));
  };

  // Manejador de eventos para filtrar las tarjetas favoritas
  const handleFilter = (evento) => {
    dispatch(filterFav(evento.target.value));
  };

  // Función para manejar el cierre de una tarjeta favorita
  const onClose = (id) => {
    dispatch(removeFav(id)); // Despachar la acción para eliminar la tarjeta de favoritos por su ID
  };

  return (
    <div>
      <div>
        {/* Select para cambiar el orden de las tarjetas */}
        <select name="order" onChange={handleOrder}>
          <option value="A">A</option>
          <option value="D">D</option>
        </select>
        {/* Select para filtrar las tarjetas favoritas */}
        <select name="filter" onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div>
        {/* Renderizar las tarjetas favoritas */}
        {myFavorites.map(
          ({ id, name, status, species, gender, origin, image }) => {
            return (
              <Card
                key={id}
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                origin={origin.name}
                image={image}
                onClose={onClose}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps)(Favorites);
