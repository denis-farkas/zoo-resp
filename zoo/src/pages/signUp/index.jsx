import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  //const { firstName, lastName, birthday, address, postCode, city, phoneNumber, danceLevel, email, password, role } = req.body;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const role = "veto";

  const API_URL = "http://localhost:3001";

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { name, email, password, role };
    data = JSON.stringify(data);
    console.log(data);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${API_URL}/api/signUp`,
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
          console.log("Response succeeded!");
          setName("");
          setEmail("");
          setPassword("");
          toast.success("Inscription validée");
          setTimeout(() => {
            navigate("/signIn");
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
  };
  return (
    <div className="main-table">
      <div className="center">
        <h2>Formulaire d&apos;inscription</h2>
      </div>
      <form className="formGroup container" onSubmit={handleSubmit}>
        <div className="col-sm-6">
          <label className="form-label mt-4" htmlFor="name">
            Nom
          </label>
          <input
            id="name"
            aria-label="Entrez votre nom"
            className="form-control"
            type="text"
            name="name"
            placeholder="Entrez votre nom"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required="required"
          />
        </div>

        <div className="col-sm-6">
          <label className="form-label mt-4" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            aria-label="Entrez votre adresse email"
            className="form-control"
            type="email"
            name="email"
            placeholder="Entrez votre adresse email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required="required"
          />
        </div>
        <div className="col-sm-6">
          <label className="form-label mt-4" htmlFor="password">
            Mot de passe
          </label>
          <input
            id="password"
            aria-label="Entrez votre mot de passe"
            className="form-control"
            type="password"
            name="password"
            placeholder="Entrez un mot de passe"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required="required"
          />
        </div>
        <div>
          <input
            className="btn btn-primary"
            type="submit"
            aria-label="S'inscrire"
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
