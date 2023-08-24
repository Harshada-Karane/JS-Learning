"use strict";
let num = 10; //type - number 
let msg = "Hello"; //type - string 
let sKey; //type - any  - should avoid
let emp = { id: 1 };
//emp.name = "Nasco"      //Allowed in JS not allowed in TS as Objects are dynamic in JS
/* let person : {
    id : number,
    name : string
} = {id : 1}
person.name = "Maggi"  */
//still error as while annotating we have declared 2 properties however we initialized only one ie. id
//Option 1 -> set empty string
let person1 = { id: 1, name: '' };
//Option 2 -> set as optional
let person3 = { id: 1 };
//Readonly
let employee = { id: 1 };
let fruit = {
    id: 1,
    name: "Mango",
    expiry: (date) => {
        console.log(date);
    }
};
// Union type (|)
function kgToLbs(weight) {
    //narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
