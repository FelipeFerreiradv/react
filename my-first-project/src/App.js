// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import YourName from './components/form/yourName';
import Hello from './components/form/hello.js';

function App() {
  const [name, setName] = useState()


  return (
    <div className="App">
      <div className="App-header">
        <h1>Statae Lift</h1>
        <YourName setName={setName}/>
        <Hello name={name}/>
      </div>
    </div>
  );
}

export default App;
