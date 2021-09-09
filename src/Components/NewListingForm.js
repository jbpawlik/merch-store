import { v4 } from 'uuid';

function NewListingForm() {

  return (
    <React.Fragment>
      <form onSubmit={handleNewListingFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
  );
}

export default NewListingForm;