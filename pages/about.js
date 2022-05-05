import Heading from '../components/PagesHeader'
import aboutBg from '../public/images/about.jpg'
import AboutUs from '../components/About'
import Services from '../components/Services'
import WhyUs from '../components/Why'
import ContactUs from '../components/Contact'
import Testimonials from '../components/Testimonials'

const About = () => { 
  const showHeading = false
  return ( 
      <section>
        <Heading background={aboutBg} heading={'About Us'} subheading={'At Clever Developers, we dedicated our tools and years of experience in providing the best online portfolio for businesses, brand, and companies of different levels. Here is who we are and why us...'} />
        <div>
          <AboutUs />
          <Services />
          <WhyUs />
          <ContactUs />
          <Testimonials />
        </div>
      </section>
    ); 
  }; 
  
export default About 