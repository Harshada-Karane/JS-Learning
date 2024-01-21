import React from "react";

const MatchingSlotMachine = (props) => {
    let {x, y, z} = props;              //Object Destructuring
    return (
        <>   
            <h1 style= {{ textAlign: 'center', padding : '1%' }}> {x} {y} {z} </h1>
            <h3 style={{ textAlign: 'center', paddingBottom : '1%'}}>This is Matching</h3>
            <hr />
        </>
    )
}

const NotMatchingSlotComponent = (props) => {
    let {x, y, z} = props;
    return (
        <>   
            <h1 style={{ textAlign : 'center', padding : '1%' }}> {x} {y} {z} </h1>
            <h3 style={{ textAlign : 'center', paddingBottom : '1%'}}>This is Not Matching</h3>
            <hr />
        </>
    )
}

export default MatchingSlotMachine;
export { NotMatchingSlotComponent };