import React from 'react';
import ReactDOM from 'react-dom/client';
import fruit, {juice, welcome} from './App';
//import * as fruits from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <h1>hello</h1>
    <ul>
      <li>{fruit}</li>
      <li>{juice}</li>
      <li>{welcome()}</li>
    </ul>




    {/* 
    ------------ in case of importing '*' ---------------
    <ul>
      <li>{fruits.default}</li>      
      <li>{fruits.juice}</li>
    </ul> */}
  </>
);


// use 'default' in case of importing '*' Ex. line number 23
// Use import * only when 'all' functions/variables decalred in that file need to be used.