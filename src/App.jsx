import Header from './components/Header'
import Menu from './components/Menu'
import Socials from './components/Socials'
import Projects from './components/Projects'
import './index.css'
import Profile from './components/Profile'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div id='home' className="font-arial flex flex-col bg-white dark:bg-dark transition duration-500">
      <div className="p-4 max-w-[1024px] mx-auto">
        <Menu />
        <div id='about'>
          <Profile />
        </div>
        <div id='projects'>
          <Projects />
        </div>
        <div id='contact'>
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
