import { Link } from "react-router-dom";
import "../style/Item.css";

export const Item = ({ id, img, nombre, precio }) => {
  return (
    <div className="col-xxl-2 customCont col-lg-3 col-md-5 col-sm-5 col-10">
      <div className="row">
        <div>
          <div className="card-sl">
            <div className="card-image">
              <Link to={`/product/${id}`}>
                <img src={img} alt="img" />
              </Link>
            </div>
            <div className="card-heading">{nombre}</div>
            <div className="card-text">{precio}</div>
            <Link to={`/product/${id}`} className="card-button">
              Ver detalle de producto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
