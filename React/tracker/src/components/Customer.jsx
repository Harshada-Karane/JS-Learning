import React, {useEffect, useState} from 'react';
import "./Customer.css"

const Customer = () => {
    const [data, setData] = useState([]);
    const getCustomerData = async () =>{
        try{
            const res = await fetch("https://services.odata.org/northwind/northwind.svc/Customers?$format=json");
            const actualData = await res.json();
            console.log(actualData.value[0]);
            setData(actualData.value[0])
            //setData({CompanyName : "A", Country : "B"})
        } catch (err){
            console.log(err)
        }
    }
    useEffect(() => {
        getCustomerData();
    }, [])
    
  
    return (
    <>
        <section>
            <center><h1>Customers</h1></center>
            <ul>
                <li className='card'>
                    <div className='card_main'>
                        <h2 className='card_title'>{data.CompanyName}</h2>
                        <center>
                            <p>{data.Country}</p>
                        </center>
                    </div>
                </li>
            </ul>
        </section>
    </>
  )
}

export default Customer;