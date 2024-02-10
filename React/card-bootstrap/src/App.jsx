import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './Card';
import { data } from './data';

const App = () => {
  return (
    <>
        <h1 className="text-center text-capitalize text-danger my-5">Welcome to Prime Series</h1>
        <div className="container text-center">
            <div className="row">
                {
                    data.map((record, i) => {
                        return <Card data={record} key={i}/>
                    })
                }
            </div>
        </div>
    </>
  )
}

export default App;