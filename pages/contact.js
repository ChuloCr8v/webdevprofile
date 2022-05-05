import Heading from '../components/PagesHeader'
import ContactBg from '../public/images/contact.jpg'
import AboutUs from '../components/About'
import OurProjects from '../components/Projects'
import Form from '../components/Form'
import styles from '../styles/ContactPage.module.scss'
import GoogleMapReact from 'google-map-react';

const Contact = () => { 

  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  return ( 
      <section className={styles.contact_page} >
        <Heading background={ContactBg} heading={'Contact Us'} subheading={'Have a project in mind? Or an enquiry maybe? Leave us a message then, we will get back faster than you expect us to...'} />
        <div className={styles.wrapper}>
          <div className={styles.form_container}>
            <Form />
          </div>
        <div className={styles.map_wrapper} >
          <GoogleMapReact
            apiKey={'AIzaSyDkv132O9Gv8GhpkMbSOQFFpF6UU38s1Uw'} 
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
          </GoogleMapReact>
        </div>
       </div>
      </section>
    ); 
  }; 
  
export default Contact