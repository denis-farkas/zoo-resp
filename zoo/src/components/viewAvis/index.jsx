import formatDate from "../../utils/formatDate";

const ViewAvis = ({ avis, closeAvis }) => {
  return (
    <div className="display-view-message my-3">
      <figure>
        <div className="space-close-button">
          <button className="close-button" onClick={closeAvis}>
            X
          </button>
        </div>
        <blockquote className="blockquote">
          <p className="mb-0">{avis.content}</p>
        </blockquote>

        <figcaption className="blockquote-footer">
          <p>Nom: {avis.name}</p>
        </figcaption>
        <figcaption className="blockquote-footer">
          {avis.email ? `Email: ${avis.email}` : null}
          <p title="Source Title">Date:{formatDate(avis.date)}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default ViewAvis;
