import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { FormAddContact } from './FormAddContact/FormAddContact';
// import { Contact } from './Contact/Contact';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = data => {
    this.setState({ contacts: data });
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <FormAddContact onSubmit={this.handleSubmit} />
        </Section>
      </>
    );
  }
}
