import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ViewMessage from "../../components/viewMessage";
import formatDate from "../../utils/formatDate";

const BackMessage = () => {
  const [messages, setMessages] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);
  let actualUser = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  console.log(actualUser);

  const handleRowClick = (message) => {
    setSelectedMessage(message);
  };

  const closeMessage = () => {
    setSelectedMessage(null);
  };

  useEffect(() => {
    if (
      !actualUser ||
      (actualUser.role !== "admin" && actualUser.role !== "veto")
    ) {
      navigate("/");
      return;
    }

    const API_URL = "http://localhost:3001";
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API_URL}/api/readMessages`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        setMessages(response.data.messages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [actualUser, navigate]);

  return (
    <div className="main-table">
      <div className="display-message my-5">
        {selectedMessage && (
          <ViewMessage message={selectedMessage} closeMessage={closeMessage} />
        )}
      </div>
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: "5%" }} aria-label="Identifiant du message">
              Id
            </th>
            <th style={{ width: "15%" }} aria-label="Nom du message">
              Nom
            </th>
            <th style={{ width: "15%" }} aria-label="Email de l'auteur">
              Email
            </th>
            <th style={{ width: "20%" }} aria-label="Contenu du message">
              Contenu
            </th>
            <th style={{ width: "15%" }} aria-label="Date de création">
              Date
            </th>
            <th style={{ width: "15%" }} aria-label="Téléphone de l'auteur">
              Téléphone
            </th>
            <th style={{ width: "15%" }} aria-label="Actions">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {messages &&
            messages.map((message) => (
              <tr key={message.id}>
                <td>{message.id}</td>
                <td>{message.name}</td>
                <td>{message.email}</td>
                <td>{message.content}</td>
                <td>{formatDate(message.date)}</td>
                <td>{message.phone}</td>
                <td>
                  <button
                    className="btn btn-success mx-1"
                    key={message.id + message.name}
                    onClick={() => handleRowClick(message)}
                  >
                    Voir
                  </button>
                  <Link
                    to={`/deleteOneMessage/${message.id}`}
                    className="btn btn-danger"
                    aria-label="Effacer Message"
                  >
                    Effacer
                  </Link>
                </td>
              </tr>
            ))}
          {messages && !messages.length && (
            <tr>
              <td colSpan="7">
                <p>Pas de message à afficher</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BackMessage;
