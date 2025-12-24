import "../style/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="box1">
        <div className="imgContainer">
          <img src="/img/imggg.webp" alt="..." />
        </div>
        <div className="benefits">
          <div className="text">
            <p className="parrafo">
              Take a look to the new sneakers in the products section
            </p>
            <Link className="link" to="/products">
              <div className="butbox1">Start buying</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="box2">
        <div className="check">
          <div className="text">
            <p className="parrafo">
              Some sneaker designs are first appreciated by a few, and loved for
              many years afterwards. Others, however, were best sellers from the
              beginning and have continued to live decades later thanks to
              successive reissues that have kept them alive. Nike Air Max 97 do
              not belong to one group or another. They have their own category.{" "}
            </p>
            <Link className="link" to="/item/1">
              <div className="butbox2">Lets see</div>
            </Link>
          </div>
        </div>
        <div className="airmax">
          <img src="/img/airmaxHome.jpg" alt="arimaxHome" className="imgbox2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
