import styles from "./Contact.module.css";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="Contact-Form" style={{ backgroundColor: "#000" }}>
      <div className={`${styles.container__contact}`}>
        <h1 className={`${styles.sub__title}`}>Get in Touch</h1>

        <p>
          I’m currently looking for any new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I’ll try my
          best to get back to you!
        </p>
        <p className={`${styles.fiverr}`}>
          Looking for a professional full-stack developer? Your search ends
          here!{" "}
          <span style={{ background: "#00ff99", color: "#000" }}>
            I offer tailored, reliable, and affordable web solutions on Fiverr.
          </span>{" "}
          From sleek e-commerce platforms to dynamic web apps, I’ve got you
          covered. Let’s build something amazing together –{" "}
          <a
            className="color-green"
            href="https://www.fiverr.com/u_71b746ed0fe8?public_mode=true"
            target="_blank"
          >
            explore my Fiverr gigs and place your order today!
          </a>
        </p>
        <a
          style={{ marginTop: "50px" }}
          href="https://mail.google.com/mail/?view=cm&fs=1&to=abhishekkumawat.ak21@gmail.com"
          target="_blank"
          className={`btn btn-green ${styles.form_btn}`}
        >
          Say Hello
        </a>
        <div className={`${styles.social__icons}`}>
          <a
            href="https://www.facebook.com/abhisjek.kumawat?mibextid=LQQJ4d"
            target="_blank"
          >
            <IoLogoFacebook className="iconAnimation" />
          </a>
          <a href="https://x.com/AbhishekKu32163" target="_blank">
            <FaTwitter className="iconAnimation" />
          </a>
          <a href="https://www.instagram.com/abhishekkumawt._/" target="_blank">
            <FaInstagram className="iconAnimation" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
