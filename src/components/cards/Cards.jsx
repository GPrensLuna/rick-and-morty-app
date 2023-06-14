import Card from '../card/Card';
import Style from "./Cards.module.css"


export default function Cards({characters}) {
      return (
         <div className={Style.card}> 
         {characters.map(({id,name,status,species,gender,origin,image,onclose}) => (
            <div className={Style.back}>

            <Card 
            key={id}
            id={id}
            name   = {name}
            status = {status}
            species= {species}
            gender = {gender}
            origin = {origin.name}
            image  = {image}
            onClose={onclose}
            
            />
            </div>   
         ))} </div>
       )
}
