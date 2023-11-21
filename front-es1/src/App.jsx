import NavBar from './components/NavBar'
import './App.css'
import Hero from './components/Hero'
import { Routes, Route } from "react-router-dom";
import CadastroSala from './components/CadastroSala'
import CadastroUsuario from './components/CadastroUsuario'
import Footer from './components/Footer';
import Login from './components/Login';
import ReservaSala from './components/ReservaSala';

function App() {
  return (
    <div className='bg-dark'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='cadastroSala' element={<CadastroSala/>}/>
        <Route path='cadastroUsuario' element={<CadastroUsuario/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='reservaSalas' element={<ReservaSala/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
