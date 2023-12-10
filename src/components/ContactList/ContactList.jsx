// import { nanoid } from 'nanoid';

import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(contact => {
      const { name, number, id } = contact;
      return <ContactItem contactName={name} contactNumber={number} key={id} />;
    })}
  </ul>
);
