import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { Contact } from './Contact/Contact';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = data => {
    const newContact = { ...data, id: nanoid() };
    this.setState(prev => ({ contacts: [...prev.contacts, newContact] }));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <FormAddContact onSubmit={this.handleSubmit} />
        </Section>
        <Section title="Contacts">
          {this.state.contacts.length > 0 && (
            <Contact contacts={this.state.contacts} />
          )}
        </Section>
      </>
    );
  }
}
