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

function ListGroup(){
    const items = ['Paris', 'London', 'NewYork']
    return (
        <>
            <h2>Dynamic List</h2>
            <ul className="list-group">
                {items.map(item => <li className="list-group-item" key={item}>{item}</li>)}
            </ul>
        </>
    )
}

export default ListGroup;

/* 
- Component can't return more than one element 
- Internally <h1> tag converts to React.createElement('h1')
- in above code we were trying to return 2 components h1 and ul which is not allowed
- this can be solved by wrapping elements in one parent element for eg: div
    ## select no of lines -> right click -> command pallette -> select wrap with abbreviation option
    -> type the name of the element you want to wrap with for eg. div -> press enter

- better way is to use fragment bcz Fragment will not create additional element in the DOM ****
- one approach is to import Fragment
- another approach is to wrap the elements with empty angular braces
*/