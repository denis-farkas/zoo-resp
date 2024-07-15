import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const DeleteAvis = () => {
  // Get the user ID from the local storage
  let actualUser = JSON.parse(localStorage.getItem("user"));

  const { id } = useParams(); // Get the message ID from the URL
  const navigate = useNavigate();

  const deleteAvis = (id, actualUser) => {
    const idUser = actualUser.userId;
    const role = actualUser.role;

    if (idUser !== undefined || role === "admin") {
      let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: `http://localhost:3001/api/deleteOneAvis/${id}`,
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios
        .request(config)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            toast.success("avis effacé avec succès");
            setTimeout(() => {
              navigate("/backAvis");
            }, 3000);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      return null;
    }
  };

  useEffect(() => {
    deleteAvis(id, actualUser);
  }, [id, actualUser]);
};

export default DeleteAvis;
