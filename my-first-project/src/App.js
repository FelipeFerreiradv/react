// import logo from './logo.svg';
import './App.css';
import NewList from './components/form/newlist';

function App() {
  const myItens = ['react', 'vue', 'angular'];

  return (
    <div className="App">
      <div className="App-header">
      <h1>Renderizaçãoo de listas</h1>
      <NewList items={myItens}/>
      </div>
    </div>
  );
}

export default App;
