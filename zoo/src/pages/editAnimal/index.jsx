import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const EditAnimal = () => {
  const { id } = useParams();

  let actualUser = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [animal, setAnimal] = useState();

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3001/api/animal/" + id,
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .request(config)
      .then((response) => {
        console.log(response);
        setAnimal(response.data.animal);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnimal((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(animal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      actualUser !== undefined &&
      (actualUser.role === "admin" || actualUser.role === "veto")
    ) {
      const API_URL = "http://localhost:3001";
      let data = {
        SOIN: animal.SOIN,
        SANTE: animal.SANTE,
      };
      data = JSON.stringify(data);

      let config = {
        method: "put",
        maxBodyLength: Infinity,
        url: `${API_URL}/api/updateAnimal/${id}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            toast.success("Modification validée");
            setTimeout(() => {
              navigate("/backAnimal");
            }, 3000);
          }
        })
        .catch((error) => {
          const errorMessage = error.response
            ? error.response.data.message || "An error occurred"
            : "An error occurred";
          toast.error(errorMessage);
          // Utilisez la variable error ici, si nécessaire
        });
    } else {
      const errorMessage =
        "Vous ne disposez pas des droits pour cette modification";
      toast.error(errorMessage);
      navigate("/home");
    }
  };

  return (
    <div className="main-table">
      <div className="center">
        <h2>Informations Animal: {animal && animal.TITLE}</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="col-sm-6 mx-auto">
          <label className="form-label mt-4" htmlFor="soin">
            Soins
          </label>
          <input
            id="soin"
            aria-label="Entrez les soins"
            className="form-control"
            type="text"
            name="SOIN"
            placeholder="Renseignez les soins de l'animal"
            value={animal && (animal.SOIN !== null ? animal.SOIN : "")}
            onChange={handleInputChange}
            required
          />
          <div className="col-sm-6 mx-auto">
            <label className="form-label mt-4" htmlFor="sante">
              Santé
            </label>
            <input
              id="sante"
              aria-label="Entrez la santé de l'animal"
              className="form-control"
              type="text"
              name="SANTE"
              value={animal && (animal.SANTE !== null ? animal.SANTE : "")}
              placeholder="Renseignez la santé de l'animal"
              onChange={handleInputChange}
              required="required"
            />
          </div>
        </div>
        <div className="center">
          <button className="btn btn-primary" type="submit">
            Modifier
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAnimal;
