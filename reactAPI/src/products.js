import React from 'react';
import styles from './table.module.css';

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
    // console.log(props.data)  
    // console.log(productArray)
    let product_object =  (<tbody>
      <td>Product ID</td><td>  Price</td><td>Product Name</td><td>Wieght</td>
        {productArray.map((product, index) => (
          <tr  key ={index}> 
            <td>{product.key}</td>
            <td> {product.dict.price}</td>
            <td>{product.dict.product_name}</td>
            <td> {product.dict.wieght} </td>
          </tr>
     ))}
    </tbody>);

  
return (
    <div >
        <h1 id='title'>Products</h1>
        <div className={styles.students}>
          <table >
             {product_object}
          </table>
        </div>
    </div>
);
}

export default Products;



// example:
// class Table extends React.Component {
//   constructor(props) {
//      super(props)
//      this.state = {
//         students: [
//            { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
//            { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
//            { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
//            { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
//         ]
//      }
//   }

//   renderTableHeader() {
//      let header = Object.keys(this.state.students[0])
//      return header.map((key, index) => {
//         return <th key={index}>{key.toUpperCase()}</th>
//      })
//   }

//   renderTableData() {
//      return this.state.students.map((student, index) => {
//         const { id, name, age, email } = student //destructuring
//         return (
//            <tr key={id}>
//               <td>{id}</td>
//               <td>{name}</td>
//               <td>{age}</td>
//               <td>{email}</td>
//            </tr>
//         )
//      })
//   }

//   render() {
//      return (
//         <div>
//            <h1 id='title'>React Dynamic Table</h1>
//            <table id='students'>
//               <tbody>
//                  <tr>{this.renderTableHeader()}</tr>
//                  {this.renderTableData()}
//               </tbody>
//            </table>
//         </div>
//      )
//   }
// }

// ReactDOM.render(<Table />, document.getElementById('root'));