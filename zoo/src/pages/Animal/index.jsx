import { useLocation } from "react-router-dom";
import "./animal.css";

const Animal = () => {
  const location = useLocation();
  const { animal } = location.state;

  return (
    <div>
      <div className="flex-container-animal-zoo">
        <div className="flex-item">{animal.description}</div>
        <div className="flex-item">Santé:{animal.santé}</div>
        <div className="flex-item">Soins:{animal.soins}</div>
        <div className="flex-item">Nouriture:{animal.nouriture}</div>

        <div className="container-animal-zoo ">
          <div className="card-animal-zoo">
            <div className="card-animal-zoo__image">
              <img src={`/${animal.IMG}`} alt="animal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animal;
