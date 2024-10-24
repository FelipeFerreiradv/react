import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/home'
import Company from './components/pages/company'
import Contact from './components/pages/contact'
import NewProject from './components/pages/newProject'

import Container from './components/layout/Container'

function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/">Company</Link>
          <Link to="/">Contact</Link>
          <Link to="/">New Project</Link>
        </nav>
      </header>
      <Container>
        <Routes>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/company'>
            <Company/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
          <Route path='/newproject'>
            <NewProject/>
          </Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
