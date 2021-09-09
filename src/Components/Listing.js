import React from 'react';
import PropTypes from 'prop-types';


function Listing(props) {
  return (
    <React.Fragment>
      <h1>{props.name}</h1>
      <h2>{props.description}</h2>
    </React.Fragment>
  )
}

Listing.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Listing;