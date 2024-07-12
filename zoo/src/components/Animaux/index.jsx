
import AnimalCard from '../AnimalCard'
import './animaux.css'

const Animaux = ({ animaux }) => {
  return ( 
    <div className="container-animaux">
    {animaux.map((animal) => (
      <AnimalCard key={animal.title} animal={animal} />
    ))}
     </div>
  )
}

export default Animaux