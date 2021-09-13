import React from "react";
import Listing from "./Listing"
import PropTypes from "prop-types"


function Inventory (props) {
  return (
    <React.Fragment>
      {props.inventory.map((props.onListingSelection) =>
        <Listing name={listing.name}
          whenListingClicked={props.onListingSelection}
          description={listing.description}
          key={index} />
      )}
    </React.Fragment>
  );
}

Inventory.propTypes = {
  inventory: PropTypes.array,
  onListingSelection:PropTypes.func
}

export default Inventory;  
