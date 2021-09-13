import React from 'react';
import Header from './Header'
import Inventory from './Inventory'
import ProductControl from './ProductControl';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Inventory />
      <ProductControl />
    </React.Fragment>
  );
}

export default App;
