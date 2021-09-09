import React from 'react';
import Listing from './Listing'

function Inventory() {
  return (
    <React.Fragment>
      {productListings.map((product, index) =>
        <Listing name={product.name}
        description={product.description}
        key={index}/>
    <React.Fragment>
      )}
  )
}


export default Inventory;
