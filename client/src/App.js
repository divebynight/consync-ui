// client/src/App.js
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetch("/project_index.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Loaded session data:", data.sessions);
        setSessions(data.sessions);
      })
      .catch((err) => console.error("Failed to load JSON:", err));
  }, []);

  return (
    <div className="App">
      <h1>Consync Project Sessions</h1>
      <div className="session-grid">
        {sessions.map((session) => (
          <div className="session-card" key={session.id}>
            <h2>{session.name}</h2>
            <img
              src={session.thumbnail}
              alt={session.name}
              style={{ width: "100%", maxWidth: 300 }}
            />
            <p>{session.notes}</p>
            <code>{session.path}</code>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
