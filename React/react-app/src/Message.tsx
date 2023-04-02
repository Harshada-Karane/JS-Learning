function Message(){
    //JSX syntax : JavaScript XML
    //JSX allows to write expressions / passsing values dynamically
    
    //return <h1>Hello World</h1>

    /* const name = "John";
    return <h1>Hello {name}</h1> */

    //allows writing expressions/conditions
    const name = "John";
    if(name)
        return <h1>Hello {name}</h1>
    return <h1>Hello World</h1>
}

export default Message;