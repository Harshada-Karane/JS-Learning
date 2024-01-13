import React from 'react';
import ReactDOM from 'react-dom/client';

// Supported in React old version < 18
// ReactDOM.render(
//   <h1>Hello</h1>,
//   document.getElementById('root')
// )

const root = ReactDOM.createRoot(document.getElementById('root'))
/* -------------- add multiple JSX elements using div (not recommended as creates additional div tag) -------------- */
// root.render(
//   <div>
//     <h1>Hello World</h1>
//     <h3>welcome..</h3>
//   </div>
// )

/* -------------- add multiple JSX elements using square brackets -------------- */
// root.render(
//   [
//     <h1>Hello World</h1>,
//     <h3>welcome..</h3>
//   ]
// )


/* -------------- add multiple JSX elements using fragment <> -------------- */
// root.render(
//   <>
//     <h1>Hello World</h1>
//     <h3>welcome...</h3>
//   </>
// )


root.render(
  <>
    <h1>Hello World</h1>
    <h3>{`Current Date : ${new Date().toLocaleDateString()}`}</h3>
    <h4>{`Current Time : ${new Date().toLocaleTimeString()}`}</h4>
  </>
)