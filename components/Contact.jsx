import styles from "../styles/Contact.module.scss";
import Form from "./Form";
const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h3>Have A Request?</h3>
        <h1>Get in touch with us</h1>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
