import React from 'react';


function Invoices(props) {
   
    const ItemsoldArray =[];
    let keyCounter = 0;
    for(const row in props.data) {
      keyCounter+=1;
      let cust={
        key:keyCounter,
        data : row,
        dict : props.data[row],
        alldata : props.data
      }
      ItemsoldArray.push(cust)
    }; 

    let item_object =  (<div>
        {ItemsoldArray.map((item, index) => (
    <div  key ={index}> Invoice Id: #{item.dict.invoice_id}, product Id #{item.dict.product_id}, amount sold {item.dict.quantity_sold} </div>
    
     ))}
    </div>);

  
return (
    <p>
        Item Sold table:
        
        {item_object}
    </p>
);
}

export default Invoices;