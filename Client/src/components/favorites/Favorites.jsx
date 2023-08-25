import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card.jsx";
import {
  orderCards,
  filterFav,
  removeFav as removeFavGlobal,
} from "../../redux/actions/actions.js";
import { useState } from "react";
import "./Favorites.css";

const Favorites = ({ onClose }) => {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    dispatch(filterFav(e.target.value));
  };

  const onCloseFav = (id) => {
    dispatch(removeFavGlobal(id)); 
    onClose(id);
  };

  return (
    <div className="conten">
      <div className="contenOp">
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <>
        {myFavorites?.map(
          ({ id, name, status, species, gender, origin, image }) => (
            <Card
              id={id}
              key={id}
              name={name}
              species={species}
              status={status}
              origin={origin}
              gender={gender}
              image={image}
              onClose={onCloseFav}
            />
          )
        )}
      </>
    </div>
  );
};

export default Favorites;