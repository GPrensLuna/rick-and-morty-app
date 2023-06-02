import style from "./Card.module.css"

export default function Card({onClose, name, status, species, gender, image, origin }) {
   return (
      <div className={style.card}>

         <button onClick={onClose}>X</button>
         <h2 className={style.tilteName} >  {name} </h2>
         <h2> {status} </h2>
         <h2> {species} </h2>
         <h2> {gender} </h2>
         <h2> {origin} </h2>
         <img src={image} alt={name} />
      </div>
   );
}
