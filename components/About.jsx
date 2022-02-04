import styles from "../styles/About.module.scss";
import Heading from "./Heading";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <Heading text={"Your No. 1 website design and development agency"} />
        <h3>
          Your website should be the number powerhouse for your business, having
          an amazing combination of professionalism, aesthic appearance as well
          as compelling enough to convince your audience on how much they need
          your services.
        </h3>
        <p>
          That's why at Clever Developers, we work hard at providing you with a
          website that is tailored to suit your business goals, needs, as well
          as objectives. We pride our services on its affordability without any
          compromises on the quality of delivery.
        </p>
      </div>
    </section>
  );
};

export default About;
