// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import axios from 'axios'

// function App() {
//   // const [count, setCount] = useState(0)


//   return (
//     <>
//     <h1>Sign Language app</h1>
//       {/* <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   )
// }

// export default App

import React, { useState } from "react";
import './App.css';  // if you have custom styles
import axios from "axios";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [translation, setTranslation] = useState(null);

  const handleTranslate = () => {
    if (!inputText.trim()) {
      alert("Text input cannot be empty.");
      return;
    }

    axios
      .post("http://localhost:5000/api/translate", { text: inputText })
      .then((response) => {
        setTranslation(response.data.translated_text);
        alert(response.data.message);
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to translate text.");
      });
  };

  return (
    <div className="container">
      <h1>Sign Language Translator</h1>
      <input
        type="text"
        placeholder="Enter text to translate"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="input"
      />
      <button onClick={handleTranslate}>Translate</button>
      {translation && (
        <div className="result">
          <h3>Translation:</h3>
          <p>{translation}</p>
        </div>
      )}
    </div>
  );
}

