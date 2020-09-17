import React from 'react';


function Products(props) {
    const productArray =[];
    let keyCounter = 0;
    for(const row in props.data) {
      keyCounter+=1;
      let cust={
        key:keyCounter,
        data : row,
        dict : props.data[row],
        alldata : props.data
      }
      productArray.push(cust)
    }; 

    let product_object =  (<div>
        {productArray.map((product, index) => (
    <div  key ={index}> Product price: #{product.dict.price}, product name {product.dict.product_name}, weight {product.dict.wieght} </div>
    
     ))}
    </div>);

  
return (
    <p>
        Product table:
        
        {product_object}
    </p>
);
}

export default Products;