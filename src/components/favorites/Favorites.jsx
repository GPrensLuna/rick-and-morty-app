import React from "react";
import { connect } from "react-redux";
import Card from "../card/Card.jsx";

function Favorites({ myFavorites }) {
  return (
    <div>
      {myFavorites.map(({ id, name, status, species, gender, origin, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin} 
            image={image}
          />
        );
      })}
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps)(Favorites);


