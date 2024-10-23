import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Empresas from './pages/Empresa';
import Contatos from './pages/Contato';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/contato" element={<Contatos />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
