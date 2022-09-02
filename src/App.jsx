import Header from './components/Header'
import Menu from './components/Menu'
import Socials from './components/Socials'
import Projects from './components/Projects'
import './index.css'
import Profile from './components/Profile'
import Contact from './components/Contact'

function App() {
  return (
    <div className="font-arial p-4 flex flex-col pb-40">
      <Menu />
      <Header />
      <Socials />
      <Projects />
      <Profile />
      <Contact />
    </div>
  )
}

export default App
