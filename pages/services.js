import Heading from '../components/PagesHeader'
import ServicesBg from '../public/images/services.jpg'
import AboutUs from '../components/About'
import OurServices from '../components/Services'
import ContactUs from '../components/Contact'

const Services = () => { 
  const showHeading = true
  return ( 
      <section>
        <Heading background={ServicesBg} heading={'Our Services'} subheading={'We provide various online branding services for businesses and brands all over. Landing pages, Ecommerce websites, blogs, professional portfolios all form part of what we do and much more...'} />
        <div>
          <OurServices />
          <AboutUs showHeading={showHeading} />
          <ContactUs />
        </div>
      </section>
    ); 
  }; 
  
export default Services