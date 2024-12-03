import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Рендеринг приложения внутри элемента с ID root

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Привязка к корневому элементу
)