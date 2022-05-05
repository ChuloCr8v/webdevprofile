import styles from "../styles/Services.module.scss";
import { FaGlobe, FaShoppingCart, FaPen, FaBlog, FaSuitcase, FaNewspaper} from "react-icons/fa";
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
      description: 'We design and develop online shopping platforms for your online businesses, enabling you to target customers throughout the globe. We work with varying ecommerce platforms including WooCommerce, Shopify, BigCommerce and other platforms of your choice.'
    }, 
    {
      icon: <FaBlog className={styles.icon} />, 
      title: 'Blog Website Development', 
      description: 'We build fast and efficient news delivery websites across all niches. Be it a news website or a personal blog website, we got you covered.'
    }, 
    {
      icon: <FaNewspaper className={styles.icon} />, 
      title: 'Portfolio Website Development', 
      description: 'whatever service you offer, we can create the perfect portfolio website to sell you across to your target audience. We will equip your portfolio website to get your profession across in the right manner.'
    },  
    {
      icon: <FaSuitcase className={styles.icon} />, 
      title: 'Landing Page Development', 
      description: "Landing pages are essential for selling your products to your customers online. Doing the right way will deliver even better results, engagements and clients. And that's what we do at Clever Developers."
    }, 

  ]
  
  return (
    <section className={styles.services}>
      <Heading text={"What we do"} />
      <div className={styles.container}>
        {service.map(item => ( 
          <div className={styles.service} key={item.title}>
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
