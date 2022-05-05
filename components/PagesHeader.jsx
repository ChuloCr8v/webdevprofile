import styles from '../styles/PagesHeader.module.scss'

const PagesHeader = ({heading, subheading, background}) => { 
  return ( 
      <section className={styles.pages_heading} style={{backgroundImage: `url(${background.src})`}} >
        <div className={styles.container}>
          <h2 className={styles.page_heading}>{heading}</h2>
          <p className={styles.page_subheading}>{subheading} </p>
        </div>
      </section>
    ); 
  }; 
  
export default PagesHeader