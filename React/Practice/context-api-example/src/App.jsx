import React from 'react'
import { createContext } from 'react';
import CompA from './CompA';

const FirstName = createContext();
const LastName = createContext();
const App = () => {
  return (
        <FirstName.Provider value={"Max"}>
            <LastName.Provider value={"Jacob"}>
                <CompA />
            </LastName.Provider>
        </FirstName.Provider>
    )
}

export default App;
export {FirstName, LastName};
