import React from 'react';
import {useState} from 'react';
import './App.css';

function App() {
  async function doPing() {
    const response = await fetch('/api/v1/ping')
    const text = await response.text();
    console.log("text:", text);
    setPingResult(text)
  };

  const [pingResult, setPingResult] = useState<string|undefined>()

  return (
    <div className="app">
      <header>
        <div className="container">
          <h1>React application served by Spring Boot backend</h1>
        </div>
      </header>
      <section>
        <div className="container">
          <p>
            <button className="btn btn-primary" onClick={doPing}>Send ping to /api/v1/ping</button>
          </p>
          {pingResult && <p>Got response: <span className="highlight"><strong>{pingResult}</strong></span></p>}
        </div>
      </section>
    </div>
  );

}

export default App;
