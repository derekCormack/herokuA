import React from 'react';


function Customers(props) {

    return (
        <p>
          Hello from customer v3 !!
          
           {props.data.name}
           {props.data.address}
           {props.data.email}
        </p>
    );
}

export default Customers;