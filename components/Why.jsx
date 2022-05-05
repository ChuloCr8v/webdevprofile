import styles from "../styles/Why.module.scss";
import Heading from "./Heading";
import { FaDesktop } from "react-icons/fa";
import modern from "../public/modern.png";
import responsive from "../public/device.png";
import practices from "../public/practices.png";

const Why = () => {
  
  const why = [
    {
      icon: <FaDesktop className={styles.icon} />, 
      heading: 'Responsive And Fluid Design', 
      description: 'We create websites that are designed and optimized to work across all devices. This includes mobile phones, tablets, laptops and widescreen computers. This will make your website easily accessible by anyone, no matter what device they are on.'
    }, 
    {
      icon: <FaDesktop className={styles.icon} />, 
      heading: 'Clean & Modern UI', 
      description: 'We provide some of the cleanest and elegant user interfaces that are guaranteed to afford your website visitors with a great and unique experience each time. This is defined in our choice of icons, fonts, pictures and other media, so as to ensure aesthetically attractive designs and delivery.'
    }, 
    {
      icon: <FaDesktop className={styles.icon} />, 
      heading: 'Best Website Development Practices', 
      description: 'We ensure that our deliveries conform with the latest updates and best practices within the website development world. This inlcudes ensuring that your website has a faster load time while being light and easily accessible.'
    }, 
    {
      icon: <FaDesktop className={styles.icon} />, 
      heading: 'Website SE0', 
      description: 'Our contents are SEO compliant and will rank your business on Google pages, giving you a wider outreach at the same time, targetting your desired customers.'
    }, 
  ]
  return (
    <section id={styles.why}>
      <div className={styles.container}>
        <Heading text={"Why work with us?"} />
        <div className={styles.why_container}>
          {why.map((item, index) => (
            <div className={styles.why} key={index} >
              <div className={styles.icon_wrapper}>
                {item.icon} 
              </div>
              <h3 className={styles.title}>{item.heading} </h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))} 
        </div>
      </div>
    </section>
  );
};

export default Why;
