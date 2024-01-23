import React from "react";
import MatchingSlotMachine, { NotMatchingSlotComponent } from "./MatchingSlotMachine";

const SlotMachine = (props) => {
    // let x = ' 😄 ';
    // let y = ' 😄 ';
    // let z = ' 🎅 ';

    /*  --------------- without Object Destructuring ----------- */
    /* if((props.x === props.y) && (props.y === props.z)){
        return <MatchingSlotMachine x={props.x} y={props.y} z={props.z} />
    } else {
        return <NotMatchingSlotComponent x={props.x} y={props.y} z={props.z}/>
    } */

    /*  --------------- with Object Destructuring ----------- */
    /* let {x, y, z} = props;
    if(x === y && y === z){
        return <MatchingSlotMachine x={props.x} y={props.y} z={props.z} />
    } else {
        return <NotMatchingSlotComponent x={props.x} y={props.y} z={props.z}/>
    } */

    /*  --------------- with Ternary Operator ----------- */
    let {x, y, z} = props;          // Object Destructuring
    return (
        <div className="slot">
            {   x === y && y === z ?
                <MatchingSlotMachine x={x} y={y} z={z} /> : 
                <NotMatchingSlotComponent x={x} y={y} z={z} />
            }
        </div>
    )

}

export default SlotMachine;