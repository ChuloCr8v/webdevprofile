import styles from "../styles/Contact.module.scss";
import Form from "./Form";
import Heading from "./Heading";
import rocket from "../public/rocket.png";
import Image from 'next/image'

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Heading text={"Connect With Us"} />
      <div className={styles.container}>
        <div className={styles.content} >
          <p className={styles.h3}>
            Have A Request or Need A Website Design Consultations?
          </p>
          <h1>Get in touch with us and let us Discuss on It.</h1>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
