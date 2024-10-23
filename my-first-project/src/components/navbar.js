import { Link } from "react-router-dom"
// import styles from './navbar.module.css';

function Navbar(){
    return(
        <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/empresas">Empresas</Link>
        </div>
        <div>
          <Link to="/contato">Contato</Link>
        </div>
      </nav>
    )
}

export default Navbar