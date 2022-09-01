import { useState } from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import './index.css'

function App() {
  return (
    <div className="font-arial p-4 flex flex-col gap-7">
      <Menu />
      <Header />
    </div>
  )
}

export default App
