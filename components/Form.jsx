import styles from "../styles/Form.module.scss";
import { FaPaperPlane } from "react-icons/fa";
const Contact = () => {
  return (
    <form className={styles.form}>
      <h3 className={styles.title}>Leave a message!</h3>
      <div className={styles.form_group}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="please enter your full name"
        />
      </div>
      <div className={styles.form_group}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="please enter your email address"
        />
      </div>
      <div className={styles.form_group}>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="please enter your location"
        />
      </div>
      <div className={styles.form_group}>
        <label htmlFor="message">Your Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          placeholder="please leave your message"
        ></textarea>
      </div>
      <div className={styles.submit_group}>
        <input type="submit" value="Send" />
        <FaPaperPlane className={styles.icon} />
      </div>
    </form>
  );
};

export default Contact;