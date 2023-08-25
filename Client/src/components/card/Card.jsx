import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/actions.js";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

export function Card({
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
        <div className={style.contButton}>
          <div className={style.buttFav}>
            {isFav ? (
              <button className={style.button} onClick={handleFavorite}>
                ❤️
              </button>
            ) : (
              <button className={style.buttonAc} onClick={handleFavorite}>
                🤍
              </button>
            )}
          </div>

          <div className={style.buttOnc}>
            <button className={style.buttonAc} onClick={() => onClose(id)}>
              X
            </button>
          </div>
        </div>

        <img className={style.pjImg} src={image} alt={name} />

        <Link to={`/detail/${id}`}>
          <div className={style.name}>
            <h2>{name}</h2>
          </div>
        </Link>

        <div className={style.attribute}>
          <h4>
            <strong>ID:</strong> {id}
          </h4>
        </div>

        <div className={style.attribute}>
          <h4>
            <strong>Status:</strong> {status}
          </h4>
        </div>

        <div className={style.attribute}>
          <h4>
            <strong>Species:</strong> {species}
          </h4>
        </div>

        <div className={style.attribute}>
          <h4>
            <strong>Gender:</strong> {gender}
          </h4>
        </div>

        <div className={style.attribute}>
          <h4>
            <strong>Origin:</strong> {origin}
          </h4>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character)); 
    },
    removeFav: (id) => {
      dispatch(removeFav(id)); 
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites, 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
