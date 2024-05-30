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
          <div class="mb-3">
            <label for="name" class="form-label">
              Name
            </label>
            <input
              type="name"
              class="form-control"
              id="name"
              placeholder="Full Name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="user-email"
              placeholder="exampleemail@gmail.com"
            />
          </div>
          <div class="mb-3">
            <label for="contact-no-1" class="form-label">
              Contact Number
            </label>
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">
                +91
              </span>
              <input
                type="number"
                class="form-control"
                placeholder="1234567890"
                aria-label="Sizing example input"
                id="contact-no-1"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Project Description
            </label>
            <textarea
              type="text"
              class="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
