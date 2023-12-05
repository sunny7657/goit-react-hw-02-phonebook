import { Component } from 'react';
// import { nanoid } from 'nanoid';
import { Section } from './Section/Section';

// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <form>
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </Section>
        <Section title="Contacts"></Section>
      </>
    );
  }
}
