// import logo from './logo.svg';
import './App.css';
import Person from './components/form/Person';
import List from './components/form/list';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Person 
          name='Felipe' 
          age='16' 
          work='programador' 
          photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwkpK0ivrW-ZGZpkcsdicJYHYggxrzBSJNZg&s'
        />
        <List/>
      </div>
    </div>
  );
}

export default App;
