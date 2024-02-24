import React from 'react'
import { createContext } from 'react';
import CompA from './CompA';

const FirstName = createContext();
const LastName = createContext();
const App = () => {   
  return (
    <>
        <FirstName.Provider value={"John"}>
            <LastName.Provider value={"Messy"}>
                <CompA msg="Welcome to channel"/>
            </LastName.Provider>
        </FirstName.Provider> 
    </>
  )
}


export default App;
export {FirstName, LastName};