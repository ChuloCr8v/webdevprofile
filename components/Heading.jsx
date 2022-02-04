import styles from "../styles/Heading.module.scss";

const Heading = ({ text }) => {
  return <h1 className={styles.heading}>{text}</h1>;
};

export default Heading;
