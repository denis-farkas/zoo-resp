import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const DeleteMessage = () => {
  // Get the user ID from the local storage
  let actualUser = JSON.parse(localStorage.getItem("user"));

  const { id } = useParams(); // Get the message ID from the URL

  const deleteMessage = (id, actualUser) => {
    const idUser = actualUser.userId;
    const role = actualUser.role;

    if (idUser !== undefined || role === "admin") {
      let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: `http://localhost:3001/api/deleteOneMessage/${id}`,
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
            return null; // No need to render anything
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
    deleteMessage(id, actualUser);
  }, [id, actualUser]);
};

export default DeleteMessage;
