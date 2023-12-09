import { nanoid } from 'nanoid';

export const Contact = ({ contacts, number }) => (
  <ul>
    {contacts.map(contact => {
      console.log(number);
      return (
        <li name="contact" key={nanoid()}>
          {contact}:{number}
        </li>
      );
    })}
  </ul>
);
