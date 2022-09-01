import Header from './components/Header'
import Menu from './components/Menu'
import Socials from './components/Socials'
import Projects from './components/Projects'
import './index.css'

function App() {
  return (
    <div className="font-arial p-4 flex flex-col gap-7">
      <Menu />
      <Header />
      <Socials />
      <Projects />
    </div>
  )
}

export default App
