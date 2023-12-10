import { Component } from 'react';

export class Filter extends Component {
  state = {
    filter: '',
  };

  handleInputChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
    this.props.onChange(this.state.filter);
  };

  render() {
    return (
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          placeholder="Find contact"
          onChange={this.handleInputChange}
          value={this.state.filter}
        ></input>
      </label>
    );
  }
}
