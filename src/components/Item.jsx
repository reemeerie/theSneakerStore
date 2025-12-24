import "../style/Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, img, nombre, precio }) => {
  return (
    <div className="col-xxl-2 customCont col-lg-3 col-md-5 col-sm-5 col-10">
      <div className="row">
        <div>
          <div className="card-sl">
            <div className="card-image">
              <Link to={`/item/${id}`}>
                <img src={img} alt="img" />
              </Link>
            </div>
            <div className="card-heading">{nombre}</div>
            <div className="card-text">{precio}</div>
            <Link to={`/item/${id}`} className="card-button">
              Ver detalle de producto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
