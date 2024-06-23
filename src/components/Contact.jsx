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
      // console.log(data.message);
      toast.success(data.message);
      setLoading(false);
      setName("");
      setEmail("");
      setPhone("");
      setDescription("");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setName("");
      setEmail("");
      setPhone("");
      setDescription("");
      setLoading(false);
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
            className={`btn-animated btn btn-red px-4  ${styles.resumeBtn}`}
          >
            My Resume
          </a>
        </div>
        <div className={`${styles.contact__right}`}>
          <form onSubmit={submitHandler}>
            {/* <div className="mb-3"> */}
            <input
              type="name"
              className={` ${styles.form__input}`}
              id="name"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {/* </div> */}
            {/* <div className="mb-3"> */}
            {/* <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label> */}
            <input
              type="email"
              className={` ${styles.form__input}`}
              id="user-email"
              placeholder="exampleemail@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // required
            />
            {/* </div> */}
            {/* <div className="mb-3"> */}
            {/* <label htmlFor="contact-no-1" className="form-label ">
                  Contact Number
                </label> */}
            {/* <div className="input-group mb-3"> */}
            {/* <span
                    className={`input-group-text ${styles.form__input}`}
                    id="inputGroup-sizing-default"
                  >
                    +91
                  </span> */}
            <input
              type="number"
              className={` ${styles.form__input}`}
              placeholder="1234567890"
              id="contact-no-1"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              // required
            />
            {/* </div>
              </div> */}
            {/* <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Project Description
                </label> */}
            <textarea
              type="text"
              className={`${styles.form__input}`}
              rows={6}
              id="exampleInputEmail1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              // required
            />
            {/* </div> */}
            <button
              type="submit"
              className={`btn btn-red btn-animated ${styles.form_btn}`}
              disabled={loading}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
