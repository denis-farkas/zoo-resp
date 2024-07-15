import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { userService } from "../../utils/userService";

const EditUser = () => {
  const id = useParams();
  const [user, setUser] = useState(null);
  let actualUser = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const API_URL = "http://localhost:3001";

  useEffect(() => {
    let data;

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API_URL}/api/readOneUser?id=${id.id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response);
        setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id !== undefined || user.role === "admin") {
      //let errorMessage = null;
      const token = actualUser.token;
      user.userId = id.id;
      let data = { user };
      data = JSON.stringify(data);
      console.log(data);
      let config = {
        method: "put",
        maxBodyLength: Infinity,
        url: `${API_URL}/api/updateUser`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            console.log("Response succeeded!");
            toast.success("Modification validée");
            userService.update();
            setTimeout(() => {
              navigate("/backUser");
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
    }
  };

  return (
    <div className="main-table">
      <div className="center">
        <h2>Informations personnelles</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="col-sm-6 mx-auto">
          <label className="form-label mt-4" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            aria-label="Entrez votre adresse email"
            className="form-control"
            type="email"
            name="email"
            value={user && user.email}
            onChange={handleInputChange}
            required
          />
          <div className="col-sm-6 mx-auto">
            <label className="form-label mt-4" htmlFor="password">
              Mot de passe
            </label>
            <input
              id="password"
              aria-label="Entrez votre mot de passe"
              className="form-control"
              type="password"
              name="password"
              placeholder="Entrez votre mot de passe ou un nouveau"
              onChange={handleInputChange}
              required="required"
            />
          </div>
        </div>
        <div className="center">
          <button className="btn btn-primary" type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
