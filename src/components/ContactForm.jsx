import styles from "./ContactForm.module.css";
const ContactForm = () => {
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
        <form className={`bg-color text-white ${styles.form__contact}`}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="name"
              className={`form-control ${styles.form__input}`}
              id="name"
              placeholder="Full Name"
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
            />
          </div>
          <button
            type="submit"
            className={`btn-animated btn btn-blue btn-primary btn--animated ${styles.form_btn}`}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
