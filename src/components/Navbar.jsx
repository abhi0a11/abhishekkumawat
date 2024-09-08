import styles from "./Navbar.module.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <nav
        className={`${styles.shadow} navbar navbar-expand-lg navbar-dark ${styles.fixed_top} `}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className={`navbar-toggler-icon ${styles.navbar_toggler_icon}`}
            ></span>
          </button>
          <a
            className={`navbar-brand ${styles.nav_logo_name} animateDribble`}
            href="#"
          >
            Abhishek Kumawat
          </a>
          <div
            className="collapse navbar-collapse justify-content-center "
            id="navbarSupportedContent"
          >
            <ul className={`navbar-nav mb-2 mb-lg-0 ${styles.ul_item}`}>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  className={`nav-link ${styles.underline}`}
                  aria-current="page"
                  to="brand"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  className={`nav-link ${styles.underline} `}
                  to="AboutMe"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  className={`nav-link ${styles.underline} `}
                  to="Skills"
                >
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  className={`nav-link ${styles.underline} `}
                  to="portfolio-id"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  className={`nav-link ${styles.underline} `}
                  to="Contact-Form"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
