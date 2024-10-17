// import logo from './logo.svg';
import './App.css';
import Person from './components/form/Person';
import Form from './components/form/form';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <h1>Testando eventos</h1>
        <Person 
          name='Felipe' 
          age='16' 
          work='programador' 
          photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwkpK0ivrW-ZGZpkcsdicJYHYggxrzBSJNZg&s'
          />
          {/* <Event number={1}/> */}
          <Form/>
      </div>
    </div>
  );
}

export default App;
