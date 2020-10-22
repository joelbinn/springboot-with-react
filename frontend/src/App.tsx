import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [pingResult, setPingResult] = useState<string|undefined>()
  useEffect(() => {
    async function doPing() {
      const response = await fetch('/api/v1/ping')
      const text = await response.text();
      console.log("text:", text);
      setPingResult(text)
    };
    doPing();
  });
  return (
    <div className="app">
      <header>
        <div className="container">
          <h1>React application served by Spring Boot backend</h1>
        </div>
      </header>
      <section>
      <div className="container">
        <p>Sending ping to /api/v1/ping</p>
        <p>Got response: <span className="highlight"><strong>{pingResult}</strong></span></p>
      </div>
      </section>
    </div>
  );
}

export default App;
