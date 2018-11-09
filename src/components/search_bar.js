import React, { Component } from 'react';
import { Input, Form, FormGroup } from 'reactstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="col-md-10">
        <Form className="search-bar">
          <FormGroup>
            <Input
              value={this.state.term}
              onChange={event => {
                this.setState({ term: event.target.value });
              }}
            />
          </FormGroup>
        </Form>
      </div>
    );
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
