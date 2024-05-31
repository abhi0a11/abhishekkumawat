import styles from "./Footer.module.css";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className=" bg-color text-light">
        <footer className=" ">
          <div className={`row ${styles.rowFooter}`}>
            <div className=" nav justify-content-center border-b  ">
              <ul className="nav justify-content-center border-b p-2">
                <li className="nav-item footer-list">
                  <a href="#" className={`"nav-link px-2 ${styles.textF}`}>
                    Home
                  </a>
                </li>

                <li className="nav-item footer-list lap">
                  <a
                    href="#AboutMe"
                    className={`"nav-link px-2 ${styles.textF}`}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item footer-list">
                  <a
                    href="#Skills"
                    className={`"nav-link px-2 ${styles.textF}`}
                  >
                    skills
                  </a>
                </li>
                <li className="nav-item footer-list">
                  <a
                    href="#portfolio-id"
                    className={`"nav-link px-2 ${styles.textF}`}
                  >
                    Projects
                  </a>
                </li>
                <li className="nav-item footer-list mob">
                  <a
                    href="#Contact-Form"
                    className={`"nav-link px-2 ${styles.textF}`}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`d-flex justify-content-between ${styles.borderTop} p-2`}
          >
            <p>© Abhishek kumawat </p>

            <div className="d-flex ">
              <a
                href="https://facebook.com"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                <IoLogoFacebook />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a
                href="https://www.twitter.com"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                <FaTwitter />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a
                href="https://www.instagram.com "
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                <FaInstagram />
              </a>
              &nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
