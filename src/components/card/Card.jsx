import React from 'react';
import style from "./Card.module.css";
import { Link } from 'react-router-dom';

export default function Card({ id, onClose, name, status, species, gender, image, origin }) {

  return (

    <div className={style.card}>

      <div className={style.back}>

        <img className={style.pjImg} src={image} alt={name} />

        <Link to={`/detail/${id}`}>
          <div className={style.name}>
            <h2>{name}</h2>
          </div>
        </Link>

        <div className={style.attribute}>
          <span>Status:</span>
          <p>{status}</p>
        </div>

        <div className={style.attribute}>
         <span>Species:</span>
          <p>{species}</p>
          </div>

        <div className={style.attribute}>
          <span>Gender:</span>
          <p>{gender}</p>
        </div>

        <div className={style.attribute}>
          <span>Origin:</span>
          <p>{origin}</p>
        </div>

        <button onClick={()=>onClose(id)}>X</button>
      </div>
    </div>
  );
}
