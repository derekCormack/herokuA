import React from 'react';


function Customers(props) {
    const CustomerArray =[];
    let keyCounter = 0;
    for(const row in props.data) {
      if (Number.isInteger(Number(row))===true){
        keyCounter+=1;
        let cust={
          key:Number(row),
          // data : row,
          dict : props.data[row],
          // alldata : props.data
        }
       CustomerArray.push(cust)
      }
    }; 

console.log(CustomerArray)
    let cust_object =  (<div>
        {CustomerArray.map((customer, index) => (
    <div  key ={index}> Customer ID: {customer.key}, Address: {customer.dict.address}, email {customer.dict.email}, name {customer.dict.name} </div>
    
     ))}
    </div>);

  
return (
    <div>
        Customer table:
        
        {cust_object}
    </div>
);
}

export default Customers;