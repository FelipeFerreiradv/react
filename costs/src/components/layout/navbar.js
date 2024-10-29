import { Link } from "react-router-dom";
import './styles/navbar.module.css';
import Logo from '../../images/costs_logo.png';

function Navbar(){
    return(
        <header>
            <div>
                <Link to="/">
                    <img src={Logo} alt="Costs"/>
                </Link>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/company">Company</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/newproject">New Project</Link>
            </nav>
        </header>
    );
}

export default Navbar;