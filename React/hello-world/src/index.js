import React from 'react';
import ReactDOM from 'react-dom/client';

// Supported in React old version < 18
// ReactDOM.render(
//   <h1>Hello</h1>,
//   document.getElementById('root')
// )

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <h1>Hello World</h1>
)