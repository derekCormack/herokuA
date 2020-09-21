import React from 'react';


function Products(props) {
    const productArray =[];
    let keyCounter = 0;
    for(const row in props.data) {
      if (Number.isInteger(Number(row))===true){
        keyCounter+=1;
        let cust={
          key:Number(row),
          // data : row,
          dict : props.data[row],

        }
        productArray.push(cust)
      }
    }; 
    console.log(props.data)  
    console.log(productArray)
    let product_object =  (<div>
        {productArray.map((product, index) => (
    <tr  key ={index}> 
      <td>{product.key}</td>
      <td> {product.dict.price}</td>
      <td>{product.dict.product_name}</td>
      <td> {product.dict.wieght} </td>
    </tr>
     ))}
    </div>);

  
return (
    <div>
        <h1 id='title'>Product table</h1>
        <table id='invoice'>
          <tbody>
            <tr>{product_object}</tr>
          </tbody>
        </table>
    </div>
);
}

export default Products;