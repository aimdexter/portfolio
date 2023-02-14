import Menu from './components/Menu'
import Projects from './components/Projects'
import Profile from './components/Profile'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div
      id='home'
      className='font-arial flex flex-col bg-white dark:bg-dark transition duration-500'
    >
      <div className='p-4 max-w-[1024px] mx-auto'>
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
