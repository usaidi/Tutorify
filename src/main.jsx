// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from "react-router-dom"; 
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ required
import App from "./App.jsx"; // or App if you renamed it
import "./index.css"; // optional

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    
      <App />
    
  </React.StrictMode>
);

