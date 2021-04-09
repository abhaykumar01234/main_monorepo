import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
import { shadowizard } from "@abhaykumar01234/shadowizard";

function App() {
  useEffect(() => {
    shadowizard({
      shadow_type: "soft",
      padding: true
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <div className="img-bg">
          <img src="https://via.placeholder.com/250x200.png?text=image1" alt="image1" className="shadowizard" />
          <img src="https://via.placeholder.com/250x200.png?text=image2" alt="image2" className="shadowizard" />
          <img src="https://via.placeholder.com/250x200.png?text=image3" alt="image3" className="shadowizard" />
        </div>
        <p>
          Lerna POC shadowizard
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
