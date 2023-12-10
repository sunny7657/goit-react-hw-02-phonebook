import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
    // name: '',
    // filter: '',
  };

  handleSubmit = data => {
    const newContact = { ...data, id: nanoid() };
    this.setState(prev => ({ contacts: [...prev.contacts, newContact] }));
  };

  handleFilter = query => {
    this.state.contacts.map(contact => {
      const { name } = contact;
      return name.toLowerCase().includes(query.toLowerCase());
    });
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <FormAddContact onSubmit={this.handleSubmit} />
        </Section>
        <Section title="Contacts">
          {this.state.contacts.length > 0 && (
            <>
              <Filter onChange={this.handleFilter} />
              <ContactList contacts={this.state.contacts} />
            </>
          )}
        </Section>
      </>
    );
  }
}
