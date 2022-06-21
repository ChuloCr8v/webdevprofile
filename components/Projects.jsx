import styles from '../styles/Projects.module.scss'
import {FaEye} from 'react-icons/fa'
import Heading from './Heading'

const Projects = () => { 
  const project = [
  /*{
    title: 'Cleverdevelopers Website Agency',
    img: '/images/clever.jpeg',
    github: "https://github.com/ChuloCr8v/Bigshotz",
    demo: "https://cleverdevelopers.vercel.app/",
    description: "This is an agency website, designed basically for a website development agency. It spots a trendy design and describes the services offered by the agency.",
    stackOne: "Next.js",
    stackTwo: "Sass",
    stackThree: "Html", 
    featureOne: "Contains different sections including hero, contact, work tools and pictures gallery.",
    featureTwo: "Contains different pictures categories including nature, wedding, people and random images.",
    featureThree: "Visitors can search for random pictures with the search bar included in the random pictures page.",
    featureFour: "Mobile Responsive.",
 },*/
  {
    title: 'Big Shotz Photography',
    img: '/images/big.jpg',
    github: "https://github.com/ChuloCr8v/Bigshotz",
    demo: "https://bigshotz.vercel.app",
    description: "This is a photography portfolio website designed to showcase the profile of a photographer. It contains details about the photographer such as skills, services, picture gallery and contact details.",
    stackOne: "Html5",
    stackTwo: "Css3",
    stackThree: "Next.js",
    featureOne: "Contains different sections including hero, contact, work tools and pictures gallery.",
    featureTwo: "Contains different pictures categories including nature, wedding, people and random images.",
    featureThree: "Visitors can search for random pictures with the search bar included in the random pictures page.",
    featureFour: "Mobile Responsive.",
  },
 /* {
    title: 'Shop24seven Ecommerce Store',
    img: '/big.jpg',
    github: "https://github.com/ChuloCr8v/Bigshotz",
    demo: "https://cleverdevelopers.vercel.app/",
    description: "An Ecommerce store built on WordPress and woocommerce. It shows different products categories, trending products, and other elegant features.",
    stackOne: "WordPress",
    stackTwo: "Elementor",
    stackThree: "WooCommerce", 
    featureOne: "Contains different sections including hero, contact, work tools and pictures gallery.",
    featureTwo: "Contains different pictures categories including nature, wedding, people and random images.",
    featureThree: "Visitors can search for random pictures with the search bar included in the random pictures page.",
    featureFour: "Mobile Responsive.",
  },*/
  {
    title: 'Paul Ray Photography',
    img: '/images/ray.png',
    github: "https://github.com/ChuloCr8v/Bigshotz",
    demo: "https://dev-paul-ray-photography.pantheonsite.io/",
    description: "This is a photography portfolio website designed to showcase the profile of a photographer. It contains details about the photographer such as skills, services, picture gallery and contact details..",
    stackOne: "WordPress",
    stackTwo: "Elementor",
    stackThree: "Smart Slider", 
    featureOne: "Contains different sections including hero, contact, work tools and pictures gallery.",
    featureTwo: "Contains different pictures categories including nature, wedding, people and random images.",
    featureThree: "Visitors can search for random pictures with the search bar included in the random pictures page.",
    featureFour: "Mobile Responsive.",
  },
  {
    title: 'Gist Realm News Blog',
    img: '/images/gist.png',
    github: "https://github.com/ChuloCr8v/Bigshotz",
    demo: "https://dev-gistrealm.pantheonsite.io",
    description: "This is a news website built with WordPress content management system. It contains different news sections as well as slider animations for trending news updates.",
    stackOne: "WordPress",
    stackTwo: "Elementor",
    stackThree: "Slider", 
    featureOne: "Contains different sections including hero, contact, work tools and pictures gallery.",
    featureTwo: "Contains different pictures categories including nature, wedding, people and random images.",
    featureThree: "Visitors can search for random pictures with the search bar included in the random pictures page.",
    featureFour: "Mobile Responsive.",
  },
  {
    title: 'Fit-Fam Gym',
    img: '/images/gym.png',
    github: "https://github.com/ChuloCr8v/Bigshotz",
    demo: "https://fit-fam.netlify.app",
    description: "This is gym website that showcasesthe services of a gym brand. It contains basic details about the gym facility. You can see such sections as Hero, About, Services, Contact, etc.",
    stackOne: "Html5",
    stackTwo: "Css3",
    stackThree: "Boostrap", 
    featureOne: "Contains different sections including hero, contact, work tools and pictures gallery.",
    featureTwo: "Contains different pictures categories including nature, wedding, people and random images.",
    featureThree: "Visitors can search for random pictures with the search bar included in the random pictures page.",
    featureFour: "Mobile Responsive.",
  },
  {
    title: 'uknight template',
    demo: 'https://uknight.netlify.app',
    img: '/images/uknite.png', 
    description: "This is a website template with a sleek design and important sections for startups and businesses alike. Available section include Hero, features, About Us, Call To Action, Contact Section, etc. ",
    stackOne: "Html5",
    stackTwo: "Css3",
    stackThree: "JavaScript",
    featureOne: "Contains different sections including hero, features, about us, call to action section etc. Available section include Hero, features, About Us, Call To Action, Contact Section, etc.",
    featureTwo: "Spots an amazing design.",
    featureThree: "Features a responsive menu.",
    featureFour: "Mobile Responsive.", 
    
  },
  {
    title: 'Unox template',
    demo: 'https://unox.netlify.app',
    img: '/images/unox.png', 
     description: "This is a website template with a sleek design and important sections for startups and businesses alike. Available section include Hero, features, About Us, Call To Action, Contact Section, etc.",
    stackOne: "Html5",
    stackTwo: "Css3",
    stackThree: "JavaScript",
    featureOne: "Contains different sections including hero, features, about us, call to action section etc.",
    featureTwo: "Spots an amazing design.",
    featureThree: "Features a responsive menu.",
    featureFour: "Mobile Responsive.", 
     
  },
  {
    title: 'Dauxo template',
    demo: 'https://dauxo.netlify.app',
    img: '/images/project1.jpg', 
     description: "This is a website template with a sleek design and important sections for startups and businesses alike. Available section include Hero, features, About Us, Call To Action, Contact Section, etc. ",
    stackOne: "Html5",
    stackTwo: "Css3",
    stackThree: "JavaScript",
    featureOne: "Contains different sections including hero, features, about us, call to action section etc.",
    featureTwo: "Spots an amazing design.",
    featureThree: "Features a responsive menu.",
    featureFour: "Mobile Responsive.", 
    
  },
]

  
  return ( 
      <section className={styles.projects}>
        <div className={styles.container}>
          <Heading text={'Portfolio'} />
          <div className={styles.wrapper}>
            {
              project.map(item => (
                <div className={styles.project} key={item.title} style={{background: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                  <div className={styles.details} >
                    <h3 className={styles.name}>{item.name}</h3>
                    <p className={styles.description}>{item.description} </p>
                    <a href={item.demo} target="_blank" rel="noopener noreferrer" >
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