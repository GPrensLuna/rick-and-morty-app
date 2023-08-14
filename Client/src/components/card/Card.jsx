import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/actions.js";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({
  id,
  name,
  status,
  species,
  gender,
  image,
  origin,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false); // Estado para rastrear si la tarjeta es favorita

  useEffect(() => {
    // Verificar si la tarjeta actual es una de las favoritas
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myFavorites]);

   const handleFavorite = () => {
    let character = {
      id,
      name,
      status,
      species,
      gender,
      origin,
      image,
    };

    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(character);
    }
  };

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
          <span>ID:</span>
          <p>{id}</p>
        </div>

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

        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}

        <button onClick={() => onClose(id)}>X</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character)); // Llamar a la acción addFav y pasar el personaje como argumento
    },
    removeFav: (id) => {
      dispatch(removeFav(id)); // Llamar a la acción removeFav y pasar el ID del personaje como argumento
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites, // Mapear el estado myFavorites de Redux a las propiedades del componente
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
