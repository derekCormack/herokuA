import React from 'react';
import './App.css';
import functions from './fetch'
import Customers from './customers'
import Products from './products'
import Invoices from './invoice'
import Itemsold from './itemsold'

// const hardcode = {1: {'name': 'jack1 ', 'address': 2355, 'email': 'jack@bbb.com'}, 2: {'name': 'bob', 'address': 245, 'email': 'bob@tbs.com'}, 3: {'name': 'steve', 'address': 2566, 'email': 'steve@kdkd.com'}, 4: {'name': 'derek', 'address': 2456, 'email': 'derek@googs.com'}, 5: {'name': 'sean', 'address': 233, 'email': 'sean@fronk.ca'}, 6: {'name': 'randy', 'address': 2541, 'email': 'randy@glipper.uk'}, 7: {'name': 'phil', 'address': 12, 'email': 'phil@mcracken'}, 8: {'name': 'david', 'address': 2564, 'email': 'david@uptown.com'}, 9: {'name': 'mathew', 'address': 84562, 'email': 'mathew@sphlipf.com'}, 10: {'name': 'gronk', 'address': 6542, 'email': 'gronk@nsoup.uk'}, 11: {'name': 'flipper', 'address': 78452, 'email': 'flipper@fronkie.ca'}, 12: {'name': 'glutenhiemer', 'address': 521, 'email': 'gutenhiemer@bbq.com'}, 13: {'name': 'sizzlechest', 'address': 123, 'email': 'sizzlechest@frappo.nz'}, 14: {'name': 'srchronkinblitz', 'address': 654, 'email': 'srchronkinblitz@pancakemuch.com'}, 15: {'name': 'jon frappoboink', 'address': 85, 'email': 'frappo@sneezesnort.ca'}}
const url = 'http://127.0.0.1:5000/';
let customerdata ={1: {'product_name': 'not loaded', 'wieght': 1, 'name':"name not loaded"}}
let productdata={"1":{"price":"not loaded yet","product_name":"not loaded yet","wieght":"not loaded yet"}}
let invoicedata={"1": {  "customer_id": 'not loaded',   "date": 'not loaded'}}
let itemsolddata={"1": {  "invoice_id": "not loaded",   "product_id": "not loaded",   "quantity_sold": "not loaded"}}

// let loopcustomer__html = require('./templates/loopcustomer.html');
// let template = { __html: __html};

// React.module.exports = React.createClass({
//   render: function() {
//     return(
//       <div dangerouslySetInnerHTML={template} />
//     );
//   }
// });


class App extends React.Component {

  constructor() {
      super();
      // this.community = new func.community()
      this.state = {
          counter: 0
      }
  }
    async componentDidMount() {
      
      customerdata = await functions.postData(url + 'json/customer');
      invoicedata = await functions.postData(url + 'json/invoice');
      itemsolddata = await functions.postData(url + 'json/itemsold');
      productdata = await functions.postData(url + 'json/product');
      // this.community.fromserver(data);
      this.setState({ counter: 0 })
    }

  

render() {
  // const customerArray =[];
  // let keyCounter = 0;
  // for(const row in customerdata) {
  //   keyCounter+=1;
  //   let cust={
  //     key:keyCounter,
  //     data : row,
  //     dict : customerdata[row],
  //     alldata : customerdata
  //   }
  //   customerArray.push(cust)
  // }; 
    // customerArray.push(<Customers 
    //   key={keyCounter}
    //   data = {row}
    //   dict = {hardcode[row]}
    //   alldata={hardcode}
    //   />)

// **  NEVER PUSH react component inside ARRAY!  against life cycle and hooks recomendation

//  1. creat customer object/push inside customer array/ iterate of customer array with map function/ return JSX  (line 61 ptag)


// console.log(customerArray)
//   let cust_object =  (<div>
//     {customerArray.map((customer, index) => (
// <div  key ={index}> Hello, {customer.dict.name} BOYEEUAH!</div>

//  ))}
// </div>);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Getting information from our invoice spreadsheet.
        </h1>
        
        <div>
             <h2>Table of customer information.</h2><br/>
        </div>
    
        <Invoices
          data={invoicedata}
          entry={1}
        /><br/>
{/* {cust_object} */}
        <Products
          data={productdata}    
        /><br/>
       
        <Customers
          data={customerdata}
        /><br/>

        <Itemsold
          data={itemsolddata}
        />


      </header>
    </div>
  );
};
}
 



export default App;
