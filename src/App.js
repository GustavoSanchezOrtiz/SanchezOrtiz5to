import profile from './profile.png';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

function Exam() {
  return (
    <GoogleOAuthProvider clientId="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">
      <div className="Exam">
        <header className="App-header">
          <img src={profile} className="App-logo" alt="logo" />

          <p>Gustavo Sanchez Ortiz</p>

          <a
            className="App-link"
            href="https://mx.linkedin.com/in/gustavo-sánchez-ortiz-9067483a0"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINK A PERFIL DE LINKEDIN
          </a>

          <br />

          <a
            className="App-link"
            href="https://www.medikt.com.mx/practicas/documentacion.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            DOCUMENTACION PARCIAL 1
          </a>

          <div style={{ marginTop: "40px" }}>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log("Login OK", credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
        </header>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Exam;