import React from 'react';
import styles from './table.module.css';

function Invoices(props) {
    const InvoiceArray =[];
    let keyCounter = 0;
    for(const row in props.data) {
      keyCounter+=1;
      if (Number.isInteger(Number(row))===true){
        let cust={
        key:keyCounter,
        data : row,
        dict : props.data[row],
        alldata : props.data
      }
      InvoiceArray.push(cust)
    }
    }; 

    let inv_object =  (<tbody>
        <td>Invoice ID</td><td>Customer ID</td><td>Date</td>
        {InvoiceArray.map((invoice, index) => (
          <tr  key ={index}> 
            <td>{invoice.key}</td>
            <td>{invoice.dict.customer_id}</td>
            <td>{invoice.dict.date}</td>
          </tr>
     ))}
    </tbody>);

// let entry=props.entry    
return (
    <div>
       <h1 id='title'>Invoices</h1>
        <div className={styles.students}>
          <table >
            {inv_object}
          </table>
        </div>
    </div>
);
}

export default Invoices;