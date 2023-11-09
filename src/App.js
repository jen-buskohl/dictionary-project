import logo from "./logo.png";
import "./App.css";

import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="snow" />
        </main>
        <small>
          <footer className="App-footer">
            This project was coded by Jen Buskohl and is open-sourced on{" "}
            <a href="https://github.com/jen-buskohl/dictionary-project">
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a href="https://iridescent-raindrop-e26896.netlify.app/">
              Netlify
            </a>
          </footer>
        </small>
      </div>
    </div>
  );
}
