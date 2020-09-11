import React from 'react';


function Products(props) {
    let newdata=[]
    for(const row in props.data) {
        let x=row
        newdata.push(x, props.data[x].product_name, props.data[x].wieght, props.data[x].price)
    }; 

    
return (
    <p>
        Hello from products 
        {props.data[1].product_name}
        {props.data[1].wieght}
        {props.data[1].price}<br/>
        {newdata}
    </p>
);
}

export default Products;