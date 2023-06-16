import React from 'react'
import { connect } from 'react-redux'
import Card from '../card/Card'

function Favorites({myFavorites}) {
  return (
    <div>{myFavorites.map(({ id, name, status, species, gender, origin, image }) => (
         <Card 
            key={id}
            id={id}
            name   = {name}
            status = {status}
            species= {species}
            gender = {gender}
            origin = {origin.name}
            image  = {image}
            />
    ))}</div>
  )
}


export function maspStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(maspStateToProps)(Favorites);
