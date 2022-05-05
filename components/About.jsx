import styles from "../styles/About.module.scss";
import Heading from "./Heading";

const About = ({showHeading}) => {
  
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.about_us}>
          {showHeading ?  <Heading text={"About Us"} /> : ''} 
          <h3>
            We are a website design and development agency dedicated to helping
            businesses and brands boost their online presence and increase their
            reach.
          </h3>
          <p>
            We specialize in the design and building of modern, stunning and
            fast loading websites for different businesses and brands. we are a
            professional team of experts determined to give your brand a
            deserved online presence through the creation of bespoke websites as
            well as SEO services.
          </p>
        </div>
        <div className={styles.copy}>
          <Heading text={"Your No. 1 website design and development agency"} />
          <h3>
            Your website should be the number one powerhouse for your business,
            having an amazing combination of professionalism, aesthic appearance
            as well as compelling enough to convince your audience on how much
            they need your services.
          </h3>
          <p>
            That's why at Clever Developers, we work hard at providing you with
            a website that is tailored to suit your business goals, needs, as
            well as objectives. We pride our services on its affordability
            without any compromises on the quality of delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
