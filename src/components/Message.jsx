import styles from "./Message.module.css";
const Message = () => {
  return (
    <>
      <section
        className={`py-5 text-center bg-color text-light ${styles.displayBranding}`}
        style={{ height: "600px" }}
      >
        <div className="intro-1">
          <h2 className={styles.head2}>
            World class Website
            <br />
            designs for ambitious
            <br />
            companies.
          </h2>
        </div>
      </section>
    </>
  );
};

export default Message;
