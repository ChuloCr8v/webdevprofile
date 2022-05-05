import Heading from '../components/PagesHeader'
import ProjectsBg from '../public/images/projects.jpg'
import AboutUs from '../components/About'
import OurProjects from '../components/Projects'
import ContactUs from '../components/Contact'

const Projects = () => { 
  const showHeading = true
  return ( 
      <section>
        <Heading background={ProjectsBg} heading={'Our Projects'} subheading={'We are diverse. We work on all web design and development projects. Have a look at some...'} />
        <div>
          <OurProjects />
          <AboutUs showHeading={showHeading} />
          <ContactUs />
        </div>
      </section>
    ); 
  }; 
  
export default Projects