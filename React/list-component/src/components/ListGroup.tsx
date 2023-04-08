
// ---------------------------- Example 1 ----------------------------
/* function ListGroup(){
    return (
        <div>
            <h1>List</h1>  
            <ul className="list-group">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
        </div>
    ) 
} */

// ---------------------------- Example 2 ----------------------------
/* import { Fragment } from "react";
function ListGroup(){
    return (
        <Fragment>
            <h1>List</h1>  
            <ul className="list-group">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
        </Fragment>
    ) 
} */

// ---------------------------- Example 3 ----------------------------
/* function ListGroup(){
    return (
        <>
            <h1>List</h1>  
            <ul className="list-group">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
        </>
    ) 
} */

// ---------------------------- Example 4 ----------------------------
/* function ListGroup(){
    const items = ['Paris', 'London', 'NewYork']
    return (
        <>
            <h2>Dynamic List</h2>
            <ul className="list-group">
                {items.map(item => <li className="list-group-item" key={item}>{item}</li>)}
            </ul>
        </>
    )
} */

// ---------------------------- Example 5 ----------------------------
//Conditional rendering
/* function ListGroup(){
    let items = ['Mumbai', 'Bangalore']

    if(items.length === 0)
        return (
            <>
                <h1>List</h1>
                <p>No item found</p>
            </>
        ) 
    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {items.map(i => <li className="list-group-item" key={i}>{i}</li>)}
            </ul>
        </>
    )
} */

// ---------------------------- Example 6 ----------------------------
//In above example h1 tag is repeated to make it more concise we can use ternery operator
/* function ListGroup(){
    let items = ['Mumbai', 'Bangalore']
    items = []
    return (
        <>
            <h1>List</h1>
            {items.length === 0 ? <p>No item found</p> : null}
            //{items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map(i => <li className="list-group-item" key={i}>{i}</li>)}
            </ul>
        </>
    )
} */

// ---------------------------- Example 7 ----------------------------
//write condition code separately to make JSX code more readable
/* function ListGroup(){
    let items = ['Mumbai', 'Bangalore']
    items = []

    const getMessage = () => {
        return items.length === 0? <p>No item found</p> : null
    } 
    
    return (
        <>
            <h1>List</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map(i => <li className="list-group-item" key={i}>{i}</li>)}
            </ul>
        </>
    )
} */

// ---------------------------- Example 8 ----------------------------
//Eventing
/* function ListGroup(){
    const items = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai']

    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {items.map((item, index)  => (
                    <li className="list-group-item" 
                        key={item}
                        onClick={() => console.log(item, index)}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    )
} */

// ---------------------------- Example 9 ----------------------------
//Add function logic separately
import { MouseEvent } from "react";       //in TS the type of event is imp otherwise it will give error
function ListGroup(){
    const items = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai']
    const handleClick = (event : MouseEvent) => console.log(event);
    //event : MouseEvent -> TS notation
    //event return 'SyntheticBaseEvent' ???????
    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {items.map((item, index)  => (
                    <li className="list-group-item" 
                        key={item}
                        onClick={handleClick}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    )
}


export default ListGroup;

/* 
-   Component can't return more than one element 
-   Internally <h1> tag converts to React.createElement('h1')
-   in above code we were trying to return 2 components h1 and ul which is not allowed
-   this can be solved by wrapping elements in one parent element for eg: div
    ## select no of lines -> right click -> command pallette -> select wrap with abbreviation option
    -> type the name of the element you want to wrap with for eg. div -> press enter

-   better way is to use fragment bcz Fragment will not create additional element in the DOM ****
-   one approach is to import Fragment
-   another approach is to wrap the elements with empty angular braces

###### Example 6 : If 1st operand is true then && opration always return 2nd operand
-   true && 1 -> 1
-   true && 'Bob' -> Bob
*/