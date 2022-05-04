import styles from "../styles/Services.module.scss";
import { FaGlobe, FaShoppingCart, FaPen } from "react-icons/fa";
import Heading from "./Heading";

const Services = () => {
  
  const service = [
    {
      icon: <FaGlobe className={styles.icon} />, 
      title: 'Website Development/Re-Design ', 
      description: 'We design and develop highly responsive, beautiful and scalable websites for all businesses and organisations. We also improve already exisiting websites for faster loading time and improved modern appearance.'
    }, 
    {
      icon: <FaShoppingCart className={styles.icon} />, 
      title: 'Ecommerce Store Development ', 
      description: 'WWe design and develop online shopping platforms for your online businesses, enabling you to target customers throughout the globe. We work with varying ecommerce platforms including WooCommerce, Shopify, BigCommerce and other platforms of your choice.'
    }, 
    {
      icon: <FaPen className={styles.icon} />, 
      title: 'Content Creation', 
      description: 'We create well tailored contents suitable for passing whatever message you have for your clients to keep them enagaged as well as discover important information about your brands and services.'
    }, 
  ]
  
  return (
    <section className={styles.services}>
      <Heading text={"What we do"} />
      <div className={styles.container}>
        {service.map(item => ( 
          <div className={styles.service}>
            <div className={styles.icon_wrapper}>
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}  
      </div>
    </section>
  );
};

export default Services;
