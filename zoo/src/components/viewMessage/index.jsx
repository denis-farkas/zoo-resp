import formatDate from "../../utils/formatDate";
import "./viewmessage.css";

const ViewMessage = ({ message, closeMessage }) => {
  return (
    <div className="display-view-message my-3">
      <figure>
        <div className="space-close-button">
          <button className="close-button" onClick={closeMessage}>
            X
          </button>
        </div>
        <blockquote className="blockquote">
          <p className="mb-0">{message.content}</p>
        </blockquote>

        <figcaption className="blockquote-footer">
          <p>Nom: {message.name}</p>
          <p>Email:{message.email}</p>
        </figcaption>
        <figcaption className="blockquote-footer">
          {message.phone ? `Téléphone: ${message.phone}` : null}
          <p title="Source Title">Date:{formatDate(message.date)}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default ViewMessage;
