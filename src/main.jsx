import React from 'react';
import ReactDOM from 'react-dom/client';  // Import dari react-dom/client
import App from './App';
import './styles/index.css';  // Menambahkan Tailwind CSS

// Menggunakan createRoot untuk React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
