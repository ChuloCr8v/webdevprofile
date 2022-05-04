import styles from '../styles/Projects.module.scss'
import {FaEye} from 'react-icons/fa'
import Heading from './Heading'

const Projects = () => { 
  
  const project = [
    {
      name: 'Shop24seven', 
      img: '', 
      description: 'An Ecommerce website for online businesses and stores', 
      link: 'https://dev-shop24seven.pantheonsite.io/', 
    }, 
    {
      name: 'Big Shotz Photography', 
      img: '', 
      description: 'Online portfolio for a photography agency known as Big Shotz', 
      link: 'https://bigshotz.vercel.app', 
    }, 
    {
      name: 'Gist Realm', 
      img: '', 
      description: 'A news blog website with all the important features', 
      link: 'https://dev-gistrealm.pantheonsite.io/', 
    }, 
    {
      name: 'Paul Ray Photography', 
      img: '', 
      description: 'Portfolio Website for a photographer', 
      link: 'https://dev-paul-ray-photography.pantheonsite.io/', 
    }, 
   ]
  
  return ( 
      <section className={styles.projects}>
        <div className={styles.container}>
          <Heading text={'Portfolio'} />
          <div className={styles.wrapper}>
            {
              project.map(item => (
                <div className={styles.project} >
                  <div className={styles.details} >
                    <h3 className={styles.name}>{item.name}</h3>
                    <p className={styles.description}>{item.description} </p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" >
                      <FaEye className={styles.icon} />
                    </a>
                  </div>
                </div>
              ))
            } 
          </div>
        </div>
      </section>
    ); 
  }; 
  
export default Projects