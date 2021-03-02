import React, {useState} from 'react';
import './App.scss';

function App() {
  async function doPing() {
    const response = await fetch('/api/v1/ping')
    const text = await response.text();
    console.log("text:", text);
    setPingResult(text)
  }

  const [pingResult, setPingResult] = useState<string | undefined>()
  const [sideBarOpen, setSideBarOpen] = useState(false)

  return (
    <div className="app">
      <header>
        <div className="container">
          <h1>React application served by Spring Boot backend</h1>
        </div>
      </header>
      <section>
        <div className="container">
          <button className="btn btn-primary" onClick={doPing}>Send ping to /api/v1/ping</button>
          {pingResult &&
          <div className="card centered-card">
            <p>Got response: <span className="highlight"><strong>{pingResult}</strong></span></p>
          </div>
          }
        </div>
      </section>
      {sideBarOpen &&
        <div className="sidebar">
          kaka
        </div>
      }
    </div>
  );

}

export default App;
