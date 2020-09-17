import React from 'react';


function Customers(props) {

    const CustomerArray =[];
    let keyCounter = 0;
    for(const row in props.data) {
      keyCounter+=1;
      let cust={
        key:keyCounter,
        data : row,
        dict : props.data[row],
        alldata : props.data
      }
      CustomerArray.push(cust)
    }; 

    let cust_object =  (<div>
        {CustomerArray.map((customer, index) => (
    <div  key ={index}> Address: {customer.dict.address}, email {customer.dict.email}, name {customer.dict.name} </div>
    
     ))}
    </div>);

  
return (
    <p>
        Customer table:
        
        {cust_object}
    </p>
);
}

export default Customers;