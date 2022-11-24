
import React, {useState} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import FindAll from './components/FindAll'
import Home from './components/Home'
import Feed from './components/Feed'
import Jogos from './components/Jogos'
import Sobre from './components/Sobre'
import Cadastro from './components/Cadastro'
import Footer from './components/Footer'
import Times from './components/Times'
import Login from './components/Login'
import Usuario from './components/Usuario'
import PaginaNaoEncontrada from './components/PaginaNaoEncontrada'
import LandingPage from './components/LandingPage'
import Participar from './components/Participar'
import Chaves from './components/Participar/components/Chaves'
import NewHome from './components/NewHome'
import CriarTorneio from './components/CriarTorneio'
import CriarEquipe from './components/CriarEquipe'
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  const [showNav, setShowNav] = useState(true);
  return (
      <div className="divAppContainer">
          <BrowserRouter>
	    	<div>
			{   showNav &&
				<nav>
				    <Navbar />
				</nav>
			} 
                  <Routes>
                    	<Route path="/*" element={<PaginaNaoEncontrada/>}/>
                    	<Route path="/" element={<LandingPage funcNav={setShowNav} />} />
                    	<Route exact path="/login" element={<Login funcNav={setShowNav} />} />
                    	<Route exact path="/cadastro" element={<Cadastro funcNav={setShowNav} />} />
                        <Route path="/now" element={<NewHome />} />
                        <Route path="/demo" element={<Home />} />
                        <Route path="/feed" element={<Feed />} />
			            <Route path="/feed/:id" element={<Feed />} />
                        <Route path="/games" element={<Jogos />} />
                        <Route path="/about" element={<Sobre />} />
                        <Route path="/u/:id" element={<Usuario/>} />
                        <Route path="/t/:id" element={<Participar/>} />
                        <Route patch="/e/:id" element={<Times/>} />
                        <Route path="/chaves" element={<Chaves/>} />
                        <Route path="/criartorneio" element={<CriarTorneio/>} />
                        <Route path="/criarequipe" element={<CriarEquipe/>} />
                        <Route path="/find/:id" element={<FindAll />} />
                  </Routes>
              </div>
          </BrowserRouter>
      </div>
  );
}

export default App
