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
    <div className="font-arial flex flex-col">
      <div className="p-4 max-w-[1024px] mx-auto">
        <Menu />
        <Profile />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
