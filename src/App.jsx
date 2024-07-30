import styles from './App.module.css'
import About from './components/About/About'
import Blogs from './components/Blogs/Blogs'
import  Hero  from './components/Hero/Hero'
import Navbar from "./components/Navbar/Navbar"
import  Footer  from "./components/Footer/Footer"
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Blogs/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
