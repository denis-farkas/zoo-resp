import { Link } from "react-router-dom";
import "./thumb.css";
import "./thumb-small.css";
const Thumb = ({ thumb }) => {
  return (
    <div className="mb-3 thumb-card">
      <Link to="/habitats">
        <div className="thumb-card-body">
          <h6 className="thumb-card-title">{thumb.TITLE}</h6>
        </div>
        <div className=" thumb-card-header">
          <img src={thumb.IMG} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default Thumb;
