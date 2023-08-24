let num: number = 10;   //type - number 
let msg = "Hello";      //type - string 
let sKey;               //type - any  - should avoid

let emp = {id : 1}
//emp.name = "Nasco"      //Allowed in JS not allowed in TS as Objects are dynamic in JS

/* let person : {
    id : number,
    name : string
} = {id : 1}
person.name = "Maggi"  */      
//still error as while annotating we have declared 2 properties however we initialized only one ie. id
//Option 1 -> set empty string
let person1 : {
    id : number,
    name : string
} = {id : 1, name : ''}         

//Option 2 -> set as optional
let person3 : {
    id : number,
    name? :string
} = {id : 1}

// ----------------- Readonly -----------------
let employee : {
    readonly id : number,       //Restrict the modification of the object property
    name? : string
} = {id : 1}
//employee.id = 2                 //Not allowed


//Object with function
// ----------------- Alias type  -> avoids redundancy -----------------
type Fruits = {
    id : number,
    name : string,
    expiry : (date : Date) => void              //function
}

let fruit : Fruits = {
    id : 1,
    name : "Mango",
    expiry : (date : Date) => {
        console.log(date)
    }
}

// ----------------- Union type (|) -----------------
function kgToLbs(weight : number | string) {    //weight can be of type number or string
    //narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else 
        return parseInt(weight) * 2.2
}

kgToLbs(10);
kgToLbs('10kg');


//----------------- Intersection type (&) -----------------
type Resizable = {
    resize : () => void
}

type Draggable = {
    drag : () => void
}

type Widget = Resizable & Draggable         // Widget should be of (custom) type Resizable and Draggable

let textBox : Widget = {
    resize : () => {},
    drag : () => {}
}


// ----------------- Literal type -----------------
//limit the value to specific value

//option 1
//let quantity : 50 | 100 = 100

//option 2 -> Best approach
type Quantity = 50 | 100
let qty : Quantity = 50

type Metric = 'cm' | 'inch'
let height : Metric = 'cm'

// ----------------- Nullable types -----------------
// tsconfig.json -> "strictNullChecks": true (default)
function greet(name : string | null | undefined) {
    if(name)
        console.log(name)
    else
        console.log('Guest')
}

greet(null)             //Guest
greet(undefined)        //Guest
greet("Masko")          //Masko

// ----------------- Optional chaining (?.)-----------------
type Customer = {
    birthday : Date
}

function getCustomer(id : number) : Customer | null {
    return id === 0 ? null : {birthday : new Date() };
}

let customer = getCustomer(0)
//option 1
if(customer !== null || customer !== undefined)
    console.log(customer?.birthday)

////option 2 - Best approach using 'Optional property access operator (?.)'     
console.log(customer?.birthday);


//Arrays -> Customers?.[0]              //Optional element access operator
