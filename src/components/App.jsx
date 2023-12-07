import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';

let randomKey = '';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, contacts } = this.state;
    contacts.push(name);
    console.dir(contacts);

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
              <input
                type="tel"
                name="number"
                required
                value={this.state.number}
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </Section>
        <Section title="Contacts">
          {this.state.contacts.length > 0 && (
            <ul>
              {this.state.contacts.map(contact => {
                randomKey = nanoid();
                return (
                  <li name="contact" key={randomKey}>
                    {' '}
                    {contact}
                  </li>
                );
              })}
            </ul>
          )}
        </Section>
      </>
    );
  }
}
