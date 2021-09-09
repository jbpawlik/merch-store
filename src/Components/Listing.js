import React from 'react';
import PropTypes from PropTypes;


function Listing() {
  return (
    <React.Fragment>
      <h1>{props.name}</h1>
      <h2>{props.description}</h2>
    </React.Fragment>
  )
}



export default Listing;