import Navbar from "../ui/homeboard/navbar/navbar"
import Sidebar from "../ui/homeboard/sidebar/sidebar"
import styles from "../ui/homeboard/homeboard.module.css"
import Footer from "../ui/homeboard/footer/footer"
import ResponsiveNavbar from "../ui/homeboard/navbar/responsiveNavbar/responsiveNavbar"

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
        <ResponsiveNavbar/>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </div>
  )
}

export default Layout