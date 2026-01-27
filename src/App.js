import profile from './profile.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
        <p>
          Gustavo Sanchez Ortiz
        </p>
        <a
          className="App-link"
          href="www.utd.edu.mx"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINK UTD
        </a>
      </header>
    </div>
  );
}

export default App;
