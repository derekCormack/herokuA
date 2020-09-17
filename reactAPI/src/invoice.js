import React from 'react';


function Invoices(props) {
    let newdata=[]
    for(const row in props.data) {
        let x=row
        newdata.push(x, props.data[x].product_name, props.data[x].wieght, props.data[x].price)
    }; 
    const InvoiceArray =[];
    let keyCounter = 0;
    for(const row in props.data) {
      keyCounter+=1;
      let cust={
        key:keyCounter,
        data : row,
        dict : props.data[row],
        alldata : props.data
      }
      InvoiceArray.push(cust)
    }; 

    let inv_object =  (<div>
        {InvoiceArray.map((invoice, index) => (
    <div  key ={index}> Invoice #{invoice.key} Customer #{invoice.dict.customer_id} on {invoice.dict.date} </div>
    
     ))}
    </div>);

let entry=props.entry    
return (
    <p>
        {/* Invoice {entry} Customer Id = 
        {props.data[entry].customer_id}, date = {props.data[entry].date}
        <br/> */}
        {/* {newdata} */}
        {/* {invoice_object} */}
        Invoice table
{inv_object}
    </p>
);
}

export default Invoices;