import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import Hero from './components/Hero'
import CadastroSala from './components/CadastroSala'
import CadastroUsuario from './components/CadastroUsuario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-dark'>
      <NavBar></NavBar>
      <Hero></Hero>
      <CadastroSala/>
      <CadastroUsuario/>
    </div>
  )
}

export default App
