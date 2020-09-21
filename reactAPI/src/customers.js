import React from 'react';
import styles from './table.module.css';

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

// console.log(CustomerArray)
    let cust_object =  (<tbody>
     <td>Customer ID</td><td>  Address</td><td>Email</td><td>Customer Name</td>        
     {CustomerArray.map((customer, index) => (

    <tr  key ={index}> 
      <td>{customer.key}</td>
      <td>{customer.dict.address}</td>
      <td>{customer.dict.email}</td>
      <td>{customer.dict.name}</td>
    </tr>
     ))}
  </tbody>);

  
return (
    <div>
        <h1 id='title'>Customers</h1>
        <div className={styles.students}>
          <table >
               {cust_object}
          </table>
        </div>
    </div>
);
}

export default Customers;