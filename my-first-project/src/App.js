// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Empresas from './pages/Empresa'
import Contatos from './pages/Contato'

function App() {
  return (
    <Router>
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/empresa">Empresas</Link>
        </div>
        <div>
          <Link to="/contato">Contato</Link>
        </div>
      </nav>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/empresas'>
          <Empresas/>
        </Route>
        <Route path='/contato'>
          <Contatos/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
