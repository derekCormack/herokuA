import React from 'react';


function Invoices(props) {
    // let newdata=[]
    // for(const row in props.data) {
    //     let x=row
    //     newdata.push(x, props.data[x].product_name, props.data[x].wieght, props.data[x].price)
    // }; 
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

    let inv_object =  (<div>
        {InvoiceArray.map((invoice, index) => (
    <p  key ={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{invoice.key}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{invoice.dict.customer_id}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{invoice.dict.date}
    </p>
    
     ))}
    </div>);

// let entry=props.entry    
return (
    <div>
        {/* Invoice {entry} Customer Id = 
        {props.data[entry].customer_id}, date = {props.data[entry].date}
        <br/> */}
        {/* {newdata} */}
        {/* {invoice_object} */}
         INVOICE ID.....CUSTOMER..........................DATE.......................
{inv_object}
    </div>
);
}

export default Invoices;