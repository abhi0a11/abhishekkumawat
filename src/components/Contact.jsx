import styles from "./Contact.module.css";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import resumePdf from "../assets/resume__abhi.pdf";

import { useState } from "react";
import axios from "axios";
import { server } from "../main";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Submit");
  const submitHandler = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      const { data } = await axios.post(
        `${server}/form`,
        {
          name,
          email,
          phone,
          description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(data.message);
      setLoading(false);
      setName("");
      setEmail("");
      setPhone("");
      setDescription("");
      setButtonText("Message Sent Successfully");
      setTimeout(() => {
        setButtonText("Submit");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setName("");
      setEmail("");
      setPhone("");
      setDescription("");
      setLoading(false);
      setButtonText("Failed");
      setTimeout(() => {
        setButtonText("Submit");
      }, 2000);
    }
  };
  return (
    <div id="Contact-Form" className="bg-color">
      <div className={`${styles.container__contact}`}>
        <div className={`${styles.contact__left} text-white`}>
          <h1 className="sub-title">Contact Me</h1>
          <p>
            <SiMinutemailer className={`${styles.emailIcon}`} />
            abhishekkumawat.ak21@gmail.com
          </p>
          {/* <p>9828855266</p> */}
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
            <a
              href="https://www.instagram.com/abhishekkumawt._/"
              target="_blank"
            >
              <FaInstagram className="iconAnimation" />
            </a>
          </div>
          <a
            download="resume"
            href={resumePdf}
            className={`btn px-4  ${styles.resumeBtn}`}
          >
            My Resume
          </a>
        </div>
        <div className={`${styles.contact__right} `}>
          <div className={`${loading ? "loader" : ""}`}></div>
          <form onSubmit={submitHandler}>
            <input
              type="name"
              className={` ${styles.form__input} ${
                loading ? "loading_form" : ""
              }`}
              id="name"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              readOnly={loading}
            />

            <input
              type="email"
              className={` ${styles.form__input} ${
                loading ? "loading_form" : ""
              }`}
              id="user-email"
              placeholder="Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              readOnly={loading}
              required
            />

            <input
              type="number"
              className={` ${styles.form__input} ${
                loading ? "loading_form" : ""
              }`}
              placeholder="Contact Number"
              id="contact-no-1"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              readOnly={loading}
              required
            />

            <textarea
              type="text"
              className={`${styles.form__input} ${
                loading ? "loading_form" : ""
              }`}
              rows={6}
              id="exampleInputEmail1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Project Description"
              readOnly={loading}
              required
            />
            {/* </div> */}
            <button
              type="submit"
              className={`btn ${styles.form_btn} ${
                loading ? "loading_form" : ""
              }`}
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
