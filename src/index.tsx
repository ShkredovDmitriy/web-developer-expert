import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <main className="main">
      <h2 className="subtitle">Hi, I'm</h2>
      <h1 className="title">Dmitriy Shkredov</h1>
      <p className="description">Web Developer</p>
    </main>
  </React.StrictMode>
);
