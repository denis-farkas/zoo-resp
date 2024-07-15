import React from "react";
import "./thumb-avis.css";
import formatDate from "../../utils/formatDate";

const ThumbAvis = ({ avis }) => {
  return (
    <div>
      <figure>
        <blockquote className="blockquote">
          <p className="mb-0">{avis.content}</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          {avis.name} <br />
          <cite title="Source Title">{formatDate(avis.date)}</cite>
        </figcaption>
      </figure>
    </div>
  );
};

export default ThumbAvis;
