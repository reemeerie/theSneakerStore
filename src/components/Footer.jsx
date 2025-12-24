import "../style/Footer.css";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <div className="footerContainer">
      <footer>
        <div className="footer-content">
          <h3>the Sneaker Store</h3>
          <div className="pContainer">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <ul className="socials">
            <li>
              <a
                href="https://www.instagram.com/thomasreemeerie"
                target="_blank"
                rel="noreferrer"
              >
                <IconButton size="large">
                  <FaIcons.FaInstagram className="iconos" />
                </IconButton>
              </a>
            </li>
            <li>
              <a
                href="mailto:thomasreemeerie0@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <IconButton size="large">
                  <FiIcons.FiMail className="iconos" />
                </IconButton>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/reemeerie/"
                target="_blank"
                rel="noreferrer"
              >
                <IconButton size="large">
                  <FaIcons.FaGithub className="iconos" />
                </IconButton>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/thomas-reemeerie-20076122b/"
                target="_blank"
                rel="noreferrer"
              >
                <IconButton size="large">
                  <FaIcons.FaLinkedin className="iconos" />
                </IconButton>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
