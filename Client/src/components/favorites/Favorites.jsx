import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card.jsx";
//import styled from 'styled-components';
import {
  orderCards,
  filterFav,
} from "../../redux/actions/actions.js";
import { useState } from 'react';



const Favorites = () => {
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

  return (
    <div>
      <div>
        <select onChange={handleOrder}>
          <option value='A'>Ascendente</option>
          <option value='D'>Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Genderless'>Genderless</option>
          <option value='unknown'>Unknown</option>
        </select>
      </div>
      <>
        {myFavorites?.map((fav) => (
          <Card
            id={fav.id}
            key={fav.id}
            name={fav.name}
            species={fav.species}
            status={fav.status}
            origin={fav.origin}
            gender={fav.gender}
            image={fav.image}
          />
        ))}
      </>
    </div>
  );
};

export default Favorites;

