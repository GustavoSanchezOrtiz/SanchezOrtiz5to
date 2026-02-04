import profile from './profile.png';
import './App.css';

function Exam() {
  return (
    <div className="Exam">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
        <p>
          Gustavo Sanchez Ortiz
        </p>
        <a
          className="App-link"
          href="https://mx.linkedin.com/in/gustavo-sánchez-ortiz-9067483a0"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINK A PERFIL DE LINKEDIN
        </a>
        <br></br>
        <a
          className="App-link"
          href="https://www.medikt.com.mx/practicas/documentacion.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          DOCUMENTACION PARCIAL 1
        </a>
      </header>
    </div>
  );
}

export default Exam;
