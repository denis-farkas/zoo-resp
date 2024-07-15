import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BackMessage = () => {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
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
  }, []);

  return (
    <div className="main">
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
                <td>{message.date}</td>
                <td>{message.phone}</td>

                <td>
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
              <td>
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
