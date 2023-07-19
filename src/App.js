import logo from './logo.svg';
import './App.css';
import  {useState} from 'react';
import imagenRickyMorty from './img/rick-morty.png'
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async() => {
    const api = 
    await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = 
    await api.json();
    
    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick y Morty Wiki</h1>
        {characters ? (
        <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img src={imagenRickyMorty} alt="Rick y Morty" className="img-home"/>
            <button onClick={reqApi} className="btn-search">Busca un personaje</button>
          </>
        )
      }
        
        </header>
    </div>
  );
}

export default App;
