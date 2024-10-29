import './index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Home from './components/pages/home';
import Company from './components/pages/company';
import Contact from './components/pages/contact';
import Projects from './components/pages/projects';
import NewProject from './components/pages/newProject';
import Container from './components/layout/Container';
import Footer from './components/layout/footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Container><Home /></Container>} />
        <Route path="/company" element={<Container><Company /></Container>} />
        <Route path="/contact" element={<Container><Contact /></Container>} />
        <Route path="/newproject" element={<Container><NewProject /></Container>} />
        <Route path="/projects" element={<Container><Projects/></Container>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
