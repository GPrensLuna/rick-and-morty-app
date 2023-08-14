import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export  const Detail = () => {
const { id } = useParams();

  const [characterDetail, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        }
      })
      .catch((error) => window.alert(error.response.data.error));

    return setCharacter({});
  }, [id]);

  return (
<div >
      <div >
        <h1>{characterDetail.name}</h1>
        <img
          src={characterDetail.image}
          alt={`${characterDetail.name}`}
        />
      </div>
      {characterDetail.name && (
        <div >
          <h2>STATUS: {characterDetail.status}</h2>
          <h2>SPECIES: {characterDetail.species}</h2>
          <h2>GENDER: {characterDetail.gender}</h2>
          <h2>ORIGIN: {characterDetail.origin}</h2>
        </div>
      )}
    </div>
  );
};
