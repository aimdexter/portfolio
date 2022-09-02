import Header from './components/Header'
import Menu from './components/Menu'
import Socials from './components/Socials'
import Projects from './components/Projects'
import './index.css'

function App() {
  return (
    <div className="font-arial p-4 flex flex-col">
      <Menu />
      <Header />
      <div id='socials'>
        <Socials />
      </div>
      <Projects />
    </div>
  )
}

export default App
