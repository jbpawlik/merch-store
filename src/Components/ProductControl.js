import React from 'react';
import NewListingForm from './NewListing';
import Inventory from './Inventory';
import ListingDetail from './ListingDetail';

class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterInventory: [],
      selectedListing: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

 handleAddingNewListingToInventory = (newListing) => {
    const newMasterInventory = this.state.masterInventory.concat(newListing);
    this.setState({masterInventory: newMasterInventory,
                  formVisibleOnPage: false });
    }
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedListing != null) {
      currentlyVisibleState = <ListingDetail listing = {this.state.selectedListing} />
      buttonText = "Return to Inventory";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewListingForm onNewTicketCreation={this.handleAddingNewListingToInventory}  />;
      buttonText = "Return to Inventory";
    } else {
      currentlyVisibleState = <Inventory inventory={this.state.masterInventory} onSelection={this.handleChangingSelectedListing} />;
      buttonText = "Add Listing";
    }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
    );
  }
}

export default ProductControl;