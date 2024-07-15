import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { userService } from "../../utils/userService";
import "./signIn.css";

const SignIn = () => {
  //const { email, password }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const API_URL = "http://localhost:3001";

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { email, password };
    data = JSON.stringify(data);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${API_URL}/api/signIn`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        if (response.status === 200) {
          console.log("Response succeeded!");
          userService.login(response.data.user);
          setEmail("");
          setPassword("");
          toast.success("Connecté");
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      })
      .catch((error) => {
        const errorMessage =
          error.response?.data?.message || "An error occurred";
        toast.error(errorMessage);
      });
  };

  const handleToken = (token) => {
    setToken(token);
  };

  return (
    <div className="main-table">
      <div className="center">
        <h2>Formulaire de connexion</h2>
      </div>
      <form className="formGroup" onSubmit={handleSubmit}>
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
            placeholder="Veuillez entrez votre adresse email"
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
            placeholder="Veuillez entrez votre mot de passe"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required="required"
          />
        </div>
        <div>
          <input
            className="btn btn-primary my-4"
            type="submit"
            aria-label="Se connecter"
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
