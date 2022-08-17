
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Feed from './components/Feed'
import Jogos from './components/Jogos'
import Sobre from './components/Sobre'
import Footer from './components/Footer'
import Login from './components/Login'
import PaginaNaoEncontrada from './components/PaginaNaoEncontrada'
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
      <div className="divMainContainer">
          <BrowserRouter>
              <div>
                  <Navbar />
                  <Routes>
                         <Route exact path="/login" element={<Login />} />
                         <Route path="/" element={<Home />} />
                         <Route path="/feed" element={<Feed />} />
                         <Route path="/games" element={<Jogos />} />
                         <Route path="/about" element={<Sobre />} />
                         <Route path="*" element={<PaginaNaoEncontrada />} />
                  </Routes>
                  <Footer />
              </div>
          </BrowserRouter>
      </div>
  );
}

export default App