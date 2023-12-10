import { Component } from 'react';

export class FormAddContact extends Component {
  state = {
    name: '',
  };

  handleInputChange = evt => {
    this.setState({ name: evt.target.value });
    console.log(this.state);
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
  };

  render() {
    return (
      <form>
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}
