import Card from "../card/Card.jsx";
import Style from "./Cards.module.css";

export default function Cards({ characters , onClose }) {
  return (
    <div className={Style.card}>
      {characters.map(
        ({ id, name, status, species, gender, origin, image }) => (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin}
            image={image}
            onClose={onClose}
          />
        )
      )}
    </div>
  );
}
