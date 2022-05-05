
import Header from './Header' 
import Footer from './Footer' 
import SocialButtons from '../../components/SocialButtons'

const Layout = ({children}) => {
  return(
    <div>
      <Header />
        {children} 
        <SocialButtons />
      <Footer />
    </div>
  )
}

export default Layout