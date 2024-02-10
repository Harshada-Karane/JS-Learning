import React from 'react';
import AccordionMu from './AccordionMu';
import { data } from './data';

const App = () => {
  return (
    <>{
        data.map((val, i) => {
            return (<AccordionMu key={i} data={val}/>)
        })
    }</>
  )
}

export default App;