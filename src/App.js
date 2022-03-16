import './App.css';
import Pokemon from './components/Pokemon';
import SinglePokemon from './components/SinglePokemon';

function App() {
  return (
    <div className="container-fluid justify-content-between">
      <div className="d-flex justify-content-between">
        <Pokemon />
        <SinglePokemon />
      </div>
    </div>
  );
}

export default App;
