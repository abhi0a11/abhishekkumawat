import { useState } from "react";
import styles from "./ContactForm.module.css";
import axios from "axios";
import { server } from "../main";
import toast from "react-hot-toast";

const ContactForm = () => {
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
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <section className={`py-5  bg-color text-light`} id="Contact-Form">
      <div>
        <div className={`${styles.contact__heading}`}>
          <h2 className="fw-bold text-white lh-1 cutom-text-color">
            Contact Me
          </h2>
          <span>Let's get conected</span>
        </div>
      </div>
      <div className={`${styles.contact__section}`}>
        <div className={`${styles.container_contact}`}>
          <h1 className={`${styles.interset__heading}`}>Have a Project?</h1>
        </div>
        <form
          className={`bg-color text-white ${styles.form__contact}`}
          onSubmit={submitHandler}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="name"
              className={`form-control ${styles.form__input}`}
              id="name"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className={`form-control ${styles.form__input}`}
              id="user-email"
              placeholder="exampleemail@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contact-no-1" className="form-label ">
              Contact Number
            </label>
            <div className="input-group mb-3">
              <span
                className={`input-group-text ${styles.form__input}`}
                id="inputGroup-sizing-default"
              >
                +91
              </span>
              <input
                type="number"
                className={`form-control ${styles.form__input}`}
                placeholder="1234567890"
                aria-label="Sizing example input"
                id="contact-no-1"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Project Description
            </label>
            <textarea
              type="text"
              className={`form-control ${styles.form__input}`}
              id="exampleInputEmail1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`btn-animated btn btn-blue btn-primary btn--animated ${styles.form_btn}`}
            disabled={loading}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
