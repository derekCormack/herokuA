import React from 'react';
import styles from './table.module.css';

function Invoices(props) {
   
    const ItemsoldArray =[];
    let keyCounter = 0;
    for(const row in props.data) {
      if (Number.isInteger(Number(row))===true){
        keyCounter+=1;
        let cust={
          key:keyCounter,
          // data : row,
          dict : props.data[row],
          // alldata : props.data
        }
        ItemsoldArray.push(cust)
      }
    }; 

    let item_object =  (<tbody>
      <td>Item ID</td><td>  Invoice ID</td><td>Product ID</td><td>Amount Sold</td>
        {ItemsoldArray.map((item, index) => (
        <tr  key ={index}> 
          <td>{item.key}</td>
          <td> {item.dict.invoice_id}</td>
          <td>{item.dict.product_id}</td>
          <td>{item.dict.quantity_sold}</td>
        </tr>
     ))}
    </tbody>);

  
return (
    <div>
        <h1 id='title'> Items Sold</h1>
        <div className={styles.students}>
          <table >
               {item_object}
          </table>
        </div>
    </div>
);
}

export default Invoices;