import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const DeleteMessage = () => {
  // Get the user ID from the local storage
  let actualUser = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams(); // Get the message ID from the URL
  const navigate = useNavigate();

  const deleteMessage = async (id, actualUser) => {
    if (!actualUser) {
      toast.error("User not authenticated");
      return;
    }

    const idUser = actualUser.userId;
    const role = actualUser.role;

    if (idUser !== undefined && role === "admin") {
      try {
        const config = {
          method: "delete",
          maxBodyLength: Infinity,
          url: `http://localhost:3001/api/deleteOneMessage/${id}`,
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await axios.request(config);

        if (response.status === 200) {
          toast.success("Avis effacé avec succès");
          setTimeout(() => {
            navigate("/backMessage");
          }, 3000);
        }
      } catch (error) {
        console.error(error);
        toast.error("Erreur lors de la suppression de l'avis");
      }
    } else {
      toast.error("Permission denied");
    }
  };

  useEffect(() => {
    if (id && actualUser) {
      deleteMessage(id, actualUser);
    }
  }, [id, actualUser]);

  return null;
};

export default DeleteMessage;
