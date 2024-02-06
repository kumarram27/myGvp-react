// src/App.jsx
import React from "react";
import FileUpload from "./components/FileUpload";
import SearchPDFs from "./components/SearchPDFs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to myGvp</h1>
      </header>

      <main>
        <section>
          <h2>Upload PDF</h2>
          <FileUpload />
        </section>

        <section>
          <h2>Search PDFs</h2>
          <SearchPDFs />
        </section>
      </main>

      <footer>
        <p>&copy; 2024 myGvp. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
