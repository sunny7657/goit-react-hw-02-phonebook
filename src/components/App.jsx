import { Component } from 'react';
// import { nanoid } from 'nanoid';
import { Section } from './Section/Section';

// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = evt => {
    const { value } = evt.target;
    this.setState({ name: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, contacts } = this.state;
    contacts.push(name);
    console.log(contacts);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                required
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </Section>
        <Section title="Contacts">
          <ul>
            <li>{this.state.contacts}</li>
          </ul>
        </Section>
      </>
    );
  }
}
