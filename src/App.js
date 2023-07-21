import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Blockchained India
        </p>
        <a
          className="App-link"
          href="https://blockchainedindia.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </a>
      </header>
    </div>
  );
}

export default App;