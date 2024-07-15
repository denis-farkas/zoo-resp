import AnimalCard from "../AnimalCard";
import "./animaux.css";

const Animaux = ({ animaux }) => {
  return (
    <div className="container-animaux">
      {animaux.map((animal) => (
        <AnimalCard key={animal.ID_animaux} animal={animal} />
      ))}
    </div>
  );
};

export default Animaux;
