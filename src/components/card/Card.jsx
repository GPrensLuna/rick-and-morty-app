import React from 'react';
import style from "./Card.module.css";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav,removeFav } from '../../redux/actions/actions';
import { useState, useEffect } from 'react';

 function Card({ id, onClose, name, status, species, gender, image, origin, addFav, removeFav, myFavorites}) {
  
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
   myFavorites.forEach((charFav) => {
      if (charFav.id === id) {
         setIsFav(true);
      }
   });
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [myFavorites]);

  function handleFavorite(){
    if(isFav){
      setIsFav(false)
      removeFav(id)
    }else{
      setIsFav(true)
      addFav({ id, name, status, species, gender, origin, image })
    } 
  }

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

        {
          isFav ? (
          <button onClick={handleFavorite}>❤️</button>
          ) : (
          <button onClick={handleFavorite}>🤍</button>
          )
        }

        <button onClick={()=>onClose(id)}>X</button>
      </div>
    </div>
  );
}

export function mapDispatchToProps(dispatch){

  return {
    addFav: function(character){
      dispatch(addFav(character));
    },
    removeFav: function(id){
          dispatch(removeFav(id));
    }
  }
}

export function mapStateToProps(state){
  return {
    myFavorites: state.myFavorites,
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Card);
