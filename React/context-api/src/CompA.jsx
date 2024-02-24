import React from 'react'
import CompB from './CompB';

const CompA = (props) => {
  return (
    <>
        <h1>{props.msg}</h1>
        <CompB />
    </>
  )
}

export default CompA;
